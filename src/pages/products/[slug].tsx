import Image from "next/image";

import { slugify } from "@/utils/slugify";
import { Product } from "@/pages";
import { AspectRatio, Box, Button } from "@chakra-ui/react";

type Props = {
  product: Product;
}

export default function ProductPage({ product: {title, price, rating, category, image, description} }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{rating.count}, {rating.rate}</p>
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