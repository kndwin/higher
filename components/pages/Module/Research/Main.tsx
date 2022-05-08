import { Container } from "components/shared";

import { Annotations } from "./Annotations";
import { PDF } from "./PDF";

export const Main = () => {
  return (
    <Container.Main
      css={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 8em)",
      }}
    >
      <PDF css={{ flex: 1 }} />
      <Annotations css={{ maxWidth: "25em" }} />
    </Container.Main>
  );
};
