import { Container, Flex, Icon, Text } from "components/shared";
import { HomeIcon, ChevronIcon } from "components/icons";

export const Header = () => {
  return (
    <Container.Header>
      <Flex>
        <Icon>
          <HomeIcon />
        </Icon>

        <Text>{`Home`}</Text>
      </Flex>
    </Container.Header>
  );
};
