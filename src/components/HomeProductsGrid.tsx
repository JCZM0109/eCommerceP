import { Box, Grid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/pages";

type Props = {
    products: Product[]
}

export function HomeProductsGrid(props: Props) {
    return (
        <Grid gridTemplateColumns={{
            base: "repeat(auto-fit, 255px)",
            lg: "repeat(auto-fit, minmax(255px, 1fr))"
        }} gap="1.85rem" gridAutoFlow={{
            base: 'column',
            lg: 'unset'
        }} gridAutoColumns="255px" gridAutoRows="1fr" alignItems="stretch" scrollSnapType="x mandatory" overflowX="scroll">
            {props.products.map((product, i) => {
                return <Box key={product.id} marginLeft={{
                    //this is to give a style to the first element of the grid only, notation: if i === 0(first rendered element) then first child will have 1rem the rest 0
                    base: i === 0 ? "0.5rem" : "0",
                    md: "0"
                }} scrollSnapAlign="center" border="solid 2px" borderColor="gray.400" padding=".5rem">
                    <ProductCard {...product} />
                </Box>;
            })}
        </Grid>
    );
}