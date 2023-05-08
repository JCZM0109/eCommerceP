
import Image from "next/image";
import Link from "next/link";
import { Box } from '@chakra-ui/react'

export function TopBar() {
    return (<Box bg="gray" w='100%' p={4} color='white'>
        <ul>
            <li>
                <Link href="#"><Image src="/ico-tel.svg" width={24} height={24} alt=""/>+57 (318) 879 1820</Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-loc.svg" width={24} height={24} alt=""/>Colombia, Cali,Valle del Cauca</Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-clock.svg" width={24} height={24} alt=""/>All week 24/7</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link href="#"><Image src="/ico-facebook.svg" width={24} height={24} alt=""/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-instagram.svg" width={24} height={24} alt=""/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-reddit.svg" width={24} height={24} alt=""/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-twitter.svg" width={24} height={24} alt=""/></Link>
            </li>
        </ul>/
    </Box>
    )
}