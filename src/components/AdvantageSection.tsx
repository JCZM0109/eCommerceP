import { Flex } from "@chakra-ui/react";
import { AdvantageItem } from "./AdvantageItem";

export function AdvantageSection() {
    return (<Flex justifyContent="space-between" margin="32px 0">
      <AdvantageItem title="Free shipping" content="On all CO order or orders above $100" icon="/ico-truck.svg"></AdvantageItem>
      <AdvantageItem title="30 days return" content="Simply return it withing 30 days for an exchange" icon="/ico-return.svg"></AdvantageItem>
      <AdvantageItem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/ico-ring.svg"></AdvantageItem>
    </Flex>);
  }