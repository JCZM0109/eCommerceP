import { Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
    title: string;
    content: string;
    icon: string;
}
export function AdvantageItem({title, content, icon}: Props) {
    return (<Grid templateColumns="40px 1fr" alignItems="center" gap=".5rem">
      <GridItem><Image src={icon} width={40} height={40} alt='' /></GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontWeight="bold" fontSize="xs">{title}</Text>
        <Text fontSize="xs">{content}</Text>
      </GridItem>
    </Grid>);
  }