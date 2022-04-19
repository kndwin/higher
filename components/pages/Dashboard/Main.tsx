import { useState } from "react";
import { styled } from "stitches.config";

import { Flex, Input, Text, Grid, Card, Badge, DropdownMenu } from "components/shared";
import { useModules } from "hooks";
import { DialogAddModule } from "./DialogAddModule";

import type { ChangeEvent } from "react";
import type { Module } from "graphql/client/generated";

export const Main = () => {
  const { modules } = useModules();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <StyledMain>
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
      <Cards
        modules={modules?.filter((module: Module) =>
          module.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </StyledMain>
  );
};

const Cards = ({ modules }: { modules: Module[] }) => {
  return (
    <Grid css={{ mt: "$3", gridCol: "repeat(auto-fill, minmax(12em, 1fr))" }}>
      {modules?.map((module: Module) => (
        <Card key={module.id}>
          <Flex css={{ justifyContent: "flex-start" }}>
            <Text css={{ mr: "$2" }}>{module.name}</Text>
						<Badge css={{ textTransform: "capitalize"}}>{module.type}</Badge>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
};

const StyledMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  background: "$slate1",
  width: "100%",
  p: "$3",
});
