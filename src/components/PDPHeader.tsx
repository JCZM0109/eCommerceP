import { ShareIcon } from "@/icons/Share";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import { StarsRating } from "./StarsRating";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
    id: number;
    title: string;
    rating: {
        count: number;
        rate: number;
    }
    category: string;
};

export function PDPHeader({ id, title, rating, category }: Props) {
    return (
        <Box bg="gray.100" padding="1rem" mb="2rem">
            <Container>
                <Flex justifyContent="space-between" alignItems="center" fontSize={{
                    base: "2xs",
                    md: "sm"
                }} mb="1rem">
                    <Flex as={UnorderedList} listStyleType="none" m="0">
                        <ListItem whiteSpace="nowrap">
                            <Link href="/">Home</Link>
                            <ListIcon as={ChevronRightIcon} w={{
                                base: "15px",
                                md: "20px"
                            }} h={{
                                base: "15px",
                                md: "20px"
                            }} mx={{
                                base: "0.2rem",
                                md: ".5rem"
                            }} />
                        </ListItem>
                        <ListItem textTransform="capitalize" whiteSpace="nowrap">
                            <Link href={`${category}`}>{category}</Link>
                            <ListIcon as={ChevronRightIcon} w={{
                                base: "15px",
                                md: "20px"
                            }} h={{
                                base: "15px",
                                md: "20px"
                            }} mx={{
                                base: "0.2rem",
                                md: ".5rem"
                            }} />
                        </ListItem>
                        <ListItem>
                            <Text noOfLines={1}>{title}</Text>
                        </ListItem>
                    </Flex>
                    {
                        /* <Flex as={Link} alignItems="center" gap="0.5rem" href="#"><Image src="/ico-share.svg" width={24} height={24} alt=""/>Share</Flex> */
                    }

                    <Button color="gray" leftIcon={<ShareIcon w={18} h={18} />} variant="ghost">Share</Button>
                </Flex>
                <Heading as="h1" fontSize="2xl" textAlign="center" my="1.5rem">{title}</Heading>
                <Flex justifyContent="space-between" alignItems="center" fontSize="sm">
                    {
                        /* <p>Rating: {rating.rate} // {rating.count} Reviews</p> */
                    }
                    <Flex gap=".6rem" alignItems="baseline">
                        <StarsRating rate={rating.rate} />
                        <Text>{rating.count} Reviews</Text>
                    </Flex>
                    <Flex gap="1.5rem">
                        <Text fontSize={{
                            base: "2xs",
                            md: "sm"
                        }}>SKU: <b>{id}</b></Text>
                        <Text fontSize={{
                            base: "2xs",
                            md: "sm"
                        }}>Availability: <b>In stock</b></Text>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}