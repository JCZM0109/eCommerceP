import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
    title: string;
    content: string;
    icon: string;
}
export function AdvantageItem({title, content, icon}: Props) {
    return (<Grid templateColumns={{
      base: "1fr",
      md: "40px 1fr",
      }} alignItems="center" justifyItems="center" gap={{base:"1rem", md: ".5rem"}}>
      <GridItem><Image src={icon} width={40} height={40} alt='' /></GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontWeight="bold" fontSize="xs">{title}</Text>
        <Show above="md">
        <Text fontSize="xs">{content}</Text>
        </Show>
      </GridItem>
    </Grid>);
  }