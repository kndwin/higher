import { Container, Flex, Text } from "components/shared";

import { Header, Main } from "components/pages/Dashboard";

function DashboardPage() {
  return (
    <Container>
      <Flex css={{ flexDirection: "column", justifyItems: "start" }}>
        <Header />
        <Main />
      </Flex>
    </Container>
  );
}
export default DashboardPage;

DashboardPage.authenticationEnabled = true;
