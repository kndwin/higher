import { styled } from "stitches.config";
import { Container, Text, Group, withAuth } from "components/shared";

import { Header } from "components/pages/Dashboard";

function Dashboard() {
  return (
    <Container>
      <Container.Sidebar>
        <Text>{`Hello`}</Text>
      </Container.Sidebar>

      <Group direction="col">
        <Header />
        <Main />
      </Group>
    </Container>
  );
}
export default withAuth(Dashboard);

const Main = () => <StyledMain></StyledMain>;

const StyledMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  background: "$bg1",
});
