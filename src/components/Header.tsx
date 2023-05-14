import Link from "next/link";
import Image from "next/image";
import { Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";

const menu = [
    {
        title: 'About us',
        href: '#',
    }, {
        title: 'Women',
        href: '#',
    }, {
        title: 'Men',
        href: '#',
    }, {
        title: 'Beauty',
        href: '#',
    }, {
        title: 'Accesories',
        href: '#',
    }, {
        title: 'Blog',
        href: '#',
    }, {
        title: 'Contact',
        href: '#',
    },
]

export function Header() {
    return (<Box w="100%" as="header" borderBottom="solid 2px" borderColor="gray.100">
        <Container as={Flex} justifyContent="space-between" alignItems="center" size="lg">
            <Flex gap={'.5rem'} margin=".5rem 0">
                <Box as="nav" zIndex={2} display={{ md: 'none' }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='ghost'
                        />
                        <MenuList>
                            {
                                menu.map((item, index) => {
                                    return <MenuItem as="a" key={index}  href={item.href}>
                                            {item.title}
                                    </MenuItem>
                                })
                            }
                        </MenuList>
                    </Menu>
                </Box>
                <Image src="/logo(1).svg" alt="" width={100} height={48} />
            </Flex>
            <Box as="nav" display={{ base: 'none', md: 'block' }} >
                <Flex as="ul" listStyleType="none" gap="2rem">
                    {       
                        menu.map((item, index) =>  {
                            return <li key={index}><Link href={item.href}>{item.title}</Link></li>
                        })
                    }  
                </Flex>
            </Box>
            <div className="commerce-menu">
                <Flex as="ul" listStyleType="none" gap="1.5rem">
                    <li>
                        <Link href="#"><Image src="/ico-search.svg" alt="" width="24" height="24" /></Link></li>
                    <li>
                        <Link href="#"><Image src="/ico-globe.svg" alt="" width="24" height="24" /></Link></li>
                    <li>
                        <Link href="#"><Image src="/ico-user.svg" alt="" width="24" height="24" /></Link></li>
                    <li>
                        <Link href="#"><Image src="/ico-bag.svg" alt="" width="24" height="24" /></Link></li>
                </Flex>
            </div>
        </Container>
    </Box>
    )
}