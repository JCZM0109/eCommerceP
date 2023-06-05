import { Product } from "@/pages";
import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";


export function ProductCard({ image, title, price, rating }: Product) {
    return (<Box width="100%">
        <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom="1rem">
            <Image src={image} alt={''} fill={true} style={{ objectFit: "contain" }}></Image>
        </AspectRatio>
        <Text height="36px" color="gray.600" marginBottom="0.75rem" fontSize="xs" noOfLines={2}>{title}</Text>
        <Flex alignItems="center" justifyContent="space-between">
            <Text>${price}</Text>
            <Flex gap="2px">
                <Flex gap=".15rem">
                    {
                        Array(Math.round(rating.rate)).fill(null).map((_, i) => <StarIcon key={i} color="orange" />)
                    }
                    {
                        Array(Math.round(5 - rating.rate)).fill(null).map((_, i) => <StarIcon key={i} color="gray.300" />)
                    }
                </Flex>
            </Flex>
        </Flex>
    </Box>
    );
}
