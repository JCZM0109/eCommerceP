import Image from "next/image";

import { slugify } from "@/utils/slugify";
import { Product } from "@/pages";
import { AspectRatio, Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  product: Product;
}

export default function ProductPage({ product: { id, title, price, rating, category, image, description } }: Props) {
  return (
    <>
      <Box bg="gray.100" padding="1rem">
        <Container>
          <Flex justifyContent="space-between" alignItems="center" fontSize="xs" mb="1rem">
            <Flex as="ul" listStyleType="none" gap="1rem">
              <li><Link href="/">Home</Link></li>
              <li><Link href={`${category}`}>{category}</Link></li>
              <li>{title}</li>
            </Flex>
            <Button>Share</Button>
          </Flex>
          <Heading as="h1" fontSize="2xl" textAlign="center">{title}</Heading>
          <Flex justifyContent="space-between" alignItems="center" fontSize="xs">
            {/* <p>Rating: {rating.rate} // {rating.count} Reviews</p> */}
            <p>
              <Flex gap=".15rem">
                {
                  Array(Math.round(rating.rate)).fill(null).map((_, i) => <StarIcon key={i} color="orange" />)
                }
                {
                  Array(Math.round(5 - rating.rate)).fill(null).map((_, i) => <StarIcon key={i} color="gray.300" />)
                }
                {rating.count} Reviews
              </Flex>
            </p>

            <Flex gap=".5rem">
              <p>SKU: {id}</p>
              <p>Availability: In stock</p>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <p>{price}</p>
      <p>{category}</p>
      <p>{description}</p>
      <Box w="340px">
        <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom="1rem">
          <Image src={image} alt={''} fill={true} style={{ objectFit: "contain" }}></Image>
        </AspectRatio>
      </Box>
      <Button>Add to cart</Button>

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