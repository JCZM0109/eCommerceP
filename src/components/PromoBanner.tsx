import { CenteredLabel } from "./CenteredLabel";

import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type Props = {
    children: React.ReactNode,
    image: StaticImageData,
}

export function PromoBanner({ children, image}: Props) {
    return (<Box position="relative">
      <Image src={image} alt=""></Image>
      <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
        <CenteredLabel>
            {children}
        </CenteredLabel>
      </Box>
    </Box>);
  }