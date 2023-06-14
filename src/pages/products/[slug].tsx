import Image from "next/image";
import Link from "next/link";


import { AspectRatio, Button, Text, Container, Flex, Heading, ListItem, GridItem, Grid, List, Divider } from "@chakra-ui/react";

import { PDPHeader } from "@/components/PDPHeader";
import { slugify } from "@/utils/slugify";
import { Product } from "@/pages";

import like from '/public/ico-like.svg';
import legal from '/public/ico-legal.svg';

import aes from '/public/logo_aes256.png';
import amex from '/public/logo_amex.png';
import mastercard from '/public/logo_mastercard.png';
import paypal from '/public/logo_paypal.png';
import visa from '/public/logo_visa.png';
import stripe from '/public/logo_stripe.png';
import discover from '/public/logo_discover.png';

import truck from '/public/ico-truck.svg';
import ireturn from '/public/ico-return.svg';
import mail from '/public/ico-mail.svg';

type Props = {
  product: Product;
}


function Price({ price }: { price: number }) {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  return <p>{currency}</p>;
}

export default function ProductPage({ product: { id, title, price, rating, category, image, description } }: Props) {
  return (
    <>
      <PDPHeader id={id} title={title} rating={rating} category={category}></PDPHeader>
      <Container as={Grid} gridTemplateColumns={{
        base: "auto",
        md: "558px 1fr",
      }} gridTemplateRows={{
        base: "repeat(2, 1fr)",
        md: "auto",
      }} gap="3rem">
        <GridItem >
          <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom="1rem">
            <Image src={image} alt={''} fill={true} style={{ objectFit: "contain" }}></Image>
          </AspectRatio>
        </GridItem>
        <GridItem>
          <List>
            <ListItem>
              <Heading as="h3" textTransform="uppercase" fontSize="md" mb="1rem" color="gray.500">Description</Heading>
              <Text>{description}</Text>
            </ListItem>
            <Divider orientation="horizontal" color="gray.300" borderWidth="2px" m="1.5rem 0" />
            <ListItem>
              <Flex gap="1.5rem" alignItems="center">
                <Text fontWeight="bold" fontSize="xl"><Price price={price} /></Text>
                <Button>Add to cart</Button>
                <Link href="#">
                  <Image src={like} width={40} height={40} alt='' />
                </Link>
                <Link href="#">
                  <Image src={legal} width={40} height={40} alt='' />
                </Link>
              </Flex>
            </ListItem>
            <Divider orientation="horizontal" color="gray.300" borderWidth="2px" m="1.5rem 0" />
          </List>
          
          <Flex gap="1.75rem" fontSize="xs" style={{ whiteSpace: "nowrap" }} >
            <Flex as={Link} gap=".25rem" alignItems="center" href="#">
              <Image src={truck} alt="" width="24"/>Shipping & Delivery
            </Flex>
            <Flex as={Link} gap=".25rem" alignItems="center" href="#">
              <Image src={ireturn} alt="" width="24"/>Return & Exchanges
            </Flex>
            <Flex as={Link} gap=".25rem" alignItems="center" href="#">
              <Image src={mail} alt="" width="24"/>Ask a question
            </Flex>
          </Flex>
          <Divider orientation="horizontal" color="gray.300" borderWidth="2px" m="1.5rem 0" />
          <Flex gap="1.5rem">
            <Image src={amex} width={50} height={50} alt='' />
            <Image src={mastercard} width={50} height={50} alt='' />
            <Image src={visa} width={50} height={50} alt='' />
            <Image src={stripe} width={50} height={50} alt='' />
            <Image src={paypal} width={50} height={50} alt='' />
            <Image src={discover} width={50} height={50} alt='' />
            <Image src={aes} width={50} height={50} alt='' />
          </Flex>
        </GridItem>
      </Container>


    </>
  );
}



export async function getStaticPaths() {

  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());

  const slugs = products.map((product: Product) => {
    return `${slugify(product.title)}-${product.id}`
  });

  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {

  const id = context.params.slug.split('-').pop();
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());

  return {
    props: {
      product
    }
  };
}