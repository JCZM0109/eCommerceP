import * as React from 'react';
import { Box, Flex } from "@chakra-ui/react";


interface CategoryLabelProps{
    children: React.ReactNode
  }
  
export const CenteredLabel: React.FunctionComponent<CategoryLabelProps> = ({children}) => {
      return <Box 
                width="fit-content" 
                bgColor="white" 
                padding="1rem 1.5rem" 
                textTransform="uppercase" 
                borderRadius="4" 
                fontWeight="bold" 
                position="relative" 
                textAlign="center"
                zIndex={1}>{children}</Box>
  
  };