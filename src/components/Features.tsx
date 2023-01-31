import { HStack, Icon, Text, StackProps, Box, Stack } from "@chakra-ui/react";
import React, { ElementType } from "react";
import {
  MoneyBackGuarenteeIcon,
  HasleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

interface FeaturesProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeaturesProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6' align='start'>
      <Icon as={icon} boxSize={['8', '8', '12']}/>
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8' as='section'>
      <Stack px='12'direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
        <Feature icon={MoneyBackGuarenteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HasleFreeIcon}>No Setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
