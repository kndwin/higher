import { useState } from "react";

import { Flex, Grid, Input, Container, Text, Card } from "components/shared";
import { useModules, ModulePayload } from "hooks/graphql/useModules";

import { DialogAddModule } from "../DialogAddModule";
import { Cards } from "./Cards";

import type { ChangeEvent } from "react";

export const Main = () => {
  const { modules, modulesResult } = useModules();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container.Main>
      <Flex css={{ justifyContent: "space-between" }}>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          value={searchTerm}
          placeholder="Search for modules"
        />
        <DialogAddModule />
      </Flex>
      {modulesResult.fetching ? (
        <Grid
          css={{ mt: "$3", gridCol: "repeat(auto-fill, minmax(12em, 1fr))" }}
        >
          {Array.from(Array(4).keys()).map((i) => (
            <Card css={{ height: "$5" }} key={i} state="loading" />
          ))}
        </Grid>
      ) : (
        <Cards
          modules={modules?.filter((module: ModulePayload) =>
            module.name.toLowerCase().includes(searchTerm.toLowerCase())
          )}
        />
      )}
    </Container.Main>
  );
};
