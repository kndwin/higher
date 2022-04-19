import { Container, Flex, Text } from "components/shared";

import { Header, Main } from "components/pages/Dashboard";
import { ComponentWithAuth } from "types/auth";

function Dashboard(): ComponentWithAuth {
  return (
    <Container>
      <Container.Sidebar>
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
