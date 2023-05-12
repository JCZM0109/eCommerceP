
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Flex, Spacer } from '@chakra-ui/react'

export function TopBar() {
    return (<Box bg="black" w='100%' p={2}>
        <Container as={Flex} color="white" justifyContent={"space-between"} fontSize="xs" size="lg">
            <Flex gap="1.5rem">
                <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-tel.svg" width={24} height={24} alt="" />+57 (318) 879 1820</Flex>
                <Flex as={Link} display={{base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-loc.svg" width={24} height={24} alt="" />Colombia, Cali,Valle del Cauca</Flex>
                <Flex as={Link} display={{base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-clock.svg" width={24} height={24} alt="" />All week 24/7</Flex>
            </Flex>
            <Flex gap="1rem">
                <Link href="#"><Image src="/ico-facebook.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-instagram.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-reddit.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-twitter.svg" width={24} height={24} alt="" /></Link>
            </Flex>
        </Container>
    </Box>
    )
}