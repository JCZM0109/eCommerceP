import { Box, Text, Button, Container, Flex, FormControl, Grid, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";

import womenStanding from '/public/woman-standing.png';
import menWalking from '/public/men-walking.png';

export function SubscribeBanner() {
    return (
        <Container background={'linear-gradient( #F3F2F2 0%, #DCDBDB 100%);'} m={{
            base: "14.75rem 0 0",
            md: "2rem auto"
        }} p={{
            base: "1.5rem",
            md: "3.55rem"
        }} maxW="100%" position="relative">
            <Box position={"absolute"} w={{
                base: "99px",
                md: "219px"
            }} h={{
                base: "236px",
                md: "524px"
            }} top={{
                base: "calc(-236px + 1.5rem)",
                md: "initial"
            }} bottom={{
                md: "0"
            }} right={{
                base: "2rem",
                md: "50%"
            }} transform={{
                md: "translateX(470px)"
            }}>
                <Image src={menWalking} alt='' fill={true} style={{
                    objectFit: 'cover'
                }} />
            </Box>
            <Box position={"absolute"} w={{
                base: "128px",
                md: "311px"
            }} h={{
                base: "242px",
                md: "545px"
            }} top={{
                base: "calc(-242px + 1.5rem)",
                md: "initial"
            }} bottom={{
                md: "0"
            }} left={{
                base: "1.5rem",
                md: "50%"
            }} transform={{
                md: "translateX(-530px)"
            }}>
                <Image src={womenStanding} alt='' fill={true} style={{
                    objectFit: 'cover'
                }} />
            </Box>
            <Flex h={{
                md: "28.75rem"
            }} maxW="33rem" margin="auto" as="article" bgColor="white" p="2rem" textTransform="uppercase">
                <Grid gap="2rem" maxW="22rem" m="auto" textAlign="center">
                    <header>
                        <Heading size="sm" color="gray">
                            Special Offer
                        </Heading>
                        <Heading size="lg">
                            Subscribe <br></br> and <Text as="span" color="red">get 10% off</Text>
                        </Heading>
                    </header>
                    <Grid as="form" action='' gap="1.5rem">
                        <FormControl>
                            <Input type='email' borderRadius="0" textAlign="inherit" placeholder="Enter your email" h="4rem" backgroundColor="gray.100" />
                        </FormControl>
                        <Button bgColor="black" size="lg" h="4rem" borderRadius="0" w="100%">Subscribe</Button>
                    </Grid>
                </Grid>
            </Flex>
        </Container>
        );
}