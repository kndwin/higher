import { Container, Flex, Icon, Text } from "components/shared";
import { HomeIcon, ChevronIcon } from "components/icons";

export const Header = () => {
  return (
    <Container.Header>
			<Flex css={{ gap: "$2"}}>
        <Icon>
          <HomeIcon />
        </Icon>

        <Text>{`Home`}</Text>
      </Flex>
    </Container.Header>
  );
};
