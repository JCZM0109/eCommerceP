
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Flex, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'

const tmenu = [
    {
        content: '+57 (318) 879 1820',
        href: '#',
        src: '/ico-tel.svg',
        key: 0,
        display: { base: 'flex', sm: 'flex' },
    }, {
        content: 'Colombia, Cali,Valle del Cauca',
        href: '#',
        src: '/ico-loc.svg',
        key: 1,
        display: { base: 'none', sm: 'flex' },
    }, {
        content: 'All week 24/7',
        href: '#',
        src: '/ico-clock.svg',
        key: 2,
        display: { base: 'none', sm: 'flex' },
    }, 
]
//p={{ base: 0, sm: 2 }}
export function TopBar() {
    return (<Box bg="black" w='100%' p={{ base: 0, sm: 2 }}>
        <Container as={Flex} color="white" justifyContent={"space-between"} fontSize="xs" size="lg">
            <Flex gap={{ base: ".5rem", md: "1.5rem" }}>
                {
                    tmenu.map((item) => {
                    return <Flex as={Link} key={item.key} display={item.display} href={item.href} alignItems="center" gap="0.5rem"><Image src={item.src} width={24} height={24} alt="" />{item.content}</Flex>
                })}
                <Show below="md">
                <Flex>
                    <Box as="nav" zIndex={2}>
                        <Menu>
                            <MenuButton 
                                variant="buttonMobile"
                                as={Button}
                                padding='0 2px'
                                fontSize="xs"
                                aria-label='Options'>More</MenuButton>
                            <MenuList>
                                {
                                    tmenu.map((item) => {
                                        if (item.key != 0 ) {
                                            return <MenuItem color='brand.900' as="a" key={item.key} href={item.href}><Image src={item.src} width={20} height={20} alt=""/>
                                                        {item.content}
                                            </MenuItem>
                                        }
                                    })
                                }
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
                </Show>
            </Flex>

            <Flex gap="1rem" alignItems="center">
                <Link href="#"><Image src="/ico-facebook.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-instagram.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-reddit.svg" width={24} height={24} alt="" /></Link>
                <Link href="#"><Image src="/ico-twitter.svg" width={24} height={24} alt="" /></Link>
            </Flex>
        </Container>
    </Box>
    )
}

{/* <Flex as={Link} display={{base: 'flex', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-tel.svg" width={24} height={24} alt="" />+57 (318) 879 1820</Flex>
                <Flex as={Link} display={{base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-loc.svg" width={24} height={24} alt="" />Colombia, Cali,Valle del Cauca</Flex>
                <Flex as={Link} display={{base: 'none', sm: 'flex' }} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-clock.svg" width={24} height={24} alt="" />All week 24/7</Flex> */}