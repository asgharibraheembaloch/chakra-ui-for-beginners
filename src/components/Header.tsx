import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <Box
      as="section"
      position="absolute"
      width="1440px"
      height="397px"
      left="0px"
      top="0px"
      background="#6B46C1"
    >
      <Heading
        position="absolute"
        width="751px"
        height="62.31px"
        left="344px"
        top="88.45px"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="800"
        fontSize="48px"
        line-height="130%"
        /* identical to box height, or 62px */

        textAlign="center"
        letterSpacing="-0.01em"
        /* gray / 50 */

        color="#F7FAFC"
      >
        Simple Pricing for your business
      </Heading>
      <Text
        position="absolute"
        width="604px"
        height="32.16px"
        left="418px"
        top="166.84px"
        /* 2xl */

        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="500"
        fontSize="24px"
        lineHeight="32px"
        /* or 133% */

        textAlign="center"
        /* gray / 50 */

        color="#F7FAFC"
        opacity="0.84"
      >
        Plans that are carfully crafted to suit your business.
      </Text>
    </Box>
  );
}
