import { Container, Flex, Text } from "components/shared";

import { Header, Main, Sidebar } from "components/pages/Module/Research";

function ResearchPage() {
  return (
    <Container>
      <Sidebar />
      <Flex css={{ flexDirection: "column", justifyItems: "start" }}>
        <Header />
        <Main />
      </Flex>
    </Container>
  );
}
export default ResearchPage;

ResearchPage.authenticationEnabled = true;
