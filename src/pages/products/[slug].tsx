import Image from "next/image";

import { slugify } from "@/utils/slugify";
import { Product } from "@/pages";
import { AspectRatio, Box, Button, Text, Container, Flex, Heading, UnorderedList, ListItem, ListIcon, SimpleGrid, GridItem, Grid, List, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { StarsRating } from "@/components/StarsRating";
import { ShareIcon } from "@/icons/Share";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  product: Product;
}

export default function ProductPage({ product: { id, title, price, rating, category, image, description } }: Props) {
  return (
    <>
      <Box bg="gray.100" padding="1rem" mb="2rem">
        <Container>
          <Flex justifyContent="space-between" alignItems="center" fontSize={{
            base: "2xs",
            md: "sm",
            }} mb="1rem">
            <Flex as={UnorderedList} listStyleType="none" m="0">
              <ListItem>
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem textTransform="capitalize">
                <ListIcon as={ChevronRightIcon} w={{base: "15px", md:"20px"}} h={{base: "15px", md:"20px"}} mx={{base: "0.2rem", md: ".5rem"}} />
                <Link href={`${category}`}>{category}</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} w={{base: "15px", md:"20px"}} h={{base: "15px", md:"20px"}} mx={{base: "0.2rem", md: ".5rem"}} />
                {title}
              </ListItem>
            </Flex>
            {/* <Flex as={Link} alignItems="center" gap="0.5rem" href="#"><Image src="/ico-share.svg" width={24} height={24} alt=""/>Share</Flex> */}

            <Button color="gray" leftIcon={<ShareIcon w={18} h={18} />} variant="ghost">Share</Button>
          </Flex>
          <Heading as="h1" fontSize="2xl" textAlign="center" my="1.5rem">{title}</Heading>
          <Flex justifyContent="space-between" alignItems="center" fontSize="sm">
            {/* <p>Rating: {rating.rate} // {rating.count} Reviews</p> */}
            <Flex gap=".6rem" alignItems="baseline">
              <StarsRating rate={rating.rate} />
              <Text>{rating.count} Reviews</Text>
            </Flex>
            <Flex gap="1.5rem">
              <Text fontSize={{
            base: "2xs",
            md: "sm",
            }}>SKU: <b>{id}</b></Text>
              <Text fontSize={{
            base: "2xs",
            md: "sm",
            }}>Availability: <b>In stock</b></Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container>
        <Grid gridTemplateColumns={{
          base: "auto",
          md: "repeat(2, 1fr)",
        }} gridTemplateRows={{
          base: "repeat(2, 1fr)",
          md: "auto",
        }} gap="3rem">
          <GridItem w="25rem">
              <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom="1rem">
                <Image src={image} alt={''} fill={true} style={{ objectFit: "contain" }}></Image>
              </AspectRatio>
          </GridItem>
          <GridItem>
            <List>
            <ListItem>
                <Heading as="h3" textTransform="uppercase" fontSize="md" mb="1rem">Description</Heading>
                <Text>{description}</Text>
              </ListItem>
              <Divider orientation="horizontal" color="gray.300" borderWidth="1px" m="1.5rem 0" />
              <ListItem>
                <Flex gap="3rem" alignItems="center">
                <Text fontWeight="bold" fontSize="2xl"> ${price}</Text>
                <Button>Add to cart</Button>
                </Flex>
              </ListItem>
              <Divider orientation="horizontal" color="gray.300" borderWidth="1px" m="1.5rem 0" />
              {/* <ListItem>
                
              </ListItem> */}
            </List>

          </GridItem>
        </Grid>
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