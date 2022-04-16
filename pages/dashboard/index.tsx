import { styled } from "stitches.config";
import { Container, Flex, Text } from "components/shared";

import { Header } from "components/pages/Dashboard";
import { ComponentWithAuth } from "types/auth";

function Dashboard(): ComponentWithAuth {
  return (
    <Container>
      <Container.Sidebar>
        <Text>{`Hello`}</Text>
      </Container.Sidebar>

      <Flex css={{ flexDirection: "column", justifyItems: "start" }}>
        <Header />
        <Main />
      </Flex>
    </Container>
  );
}
export default Dashboard;

Dashboard.authenticationEnabled = true;

const Main = () => <StyledMain></StyledMain>;

const StyledMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  background: "$bg1",
  width: "100%",
});
