import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export function Pricing() {
  return (
    <Box
      position="absolute"
      width="994px"
      height="337px"
      left="220px"
      top="256px"
    >
      <Flex>
        <Box
          position="absolute"
          width="378px"
          height="336px"
          left="220px"
          top="257px"
          background="#652CD3"
          opacity="0.1"
        >
          <Text
          position= 'absolute'
          width= '162px'
          height= '32px'
          left= '326px'
          top= '314px'
          
          fontFamily= 'Inter'
          fontStyle= 'normal'
          fontWeight= '800'
          fontSize= '24px'
          lineHeight= '32px'
          /* identical to box height, or 133% */
          
          textAlign= 'center'
          
          /* gray / 900 */
          
          color= '#171923'
          >Premium PRO</Text>
          <Heading>$329</Heading>
        </Box>
        <Box>
          <Text>billed just once</Text>
          <Button>Get Started</Button>
        </Box>
      </Flex>
    </Box>
  );
}
