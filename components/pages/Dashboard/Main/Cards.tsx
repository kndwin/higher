import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Flex,
  Input,
  Text,
  Grid,
  Card,
  Badge,
  DropdownMenu,
  Icon,
  Button,
  Dialog,
} from "components/shared";

import type { ModulePayload } from "hooks/graphql/useModules";
import { DotsHorizontal } from "components/icons";
import { useModules, useToast } from "hooks";
import { styled } from "@stitches/react";
import { DialogConfirmDeleteModule } from "./DialogConfirmDeleteModule";

export const Cards = ({ modules }: { modules: ModulePayload[] }) => {
  const router = useRouter();
  const { setSelectedModule } = useModules();

  const handleCardClick = ({ module }: { module: ModulePayload }) => {
    setSelectedModule(module);
    router.push(`/dashboard/module/${module.type.toLowerCase()}/${module.id}`);
  };

  return (
    <Dialog>
      <Grid css={{ mt: "$3", gridCol: "repeat(auto-fill, minmax(15em, 1fr))" }}>
        {modules?.map((module: ModulePayload) => (
          <StyledCardContainer key={module.id}>
            <Card
              clickable
              onClick={() => handleCardClick({ module })}
              css={{
                display: "flex",
                justifyContent: "space-between",
                pr: "$6",
              }}
              key={module.id}
            >
              <Flex css={{ justifyContent: "flex-start" }}>
                <Text css={{ mr: "$2", whiteSpace: "nowrap" }}>
                  {module.name}
                </Text>
                <Badge css={{ textTransform: "capitalize" }}>
                  {module.type}
                </Badge>
              </Flex>
            </Card>
            <DropdownMenuOptions module={module} />
          </StyledCardContainer>
        ))}
      </Grid>
    </Dialog>
  );
};

const StyledCardContainer = styled("div", {
  position: "relative",
  width: "100%",
});

const DropdownMenuOptions = ({ module }: { module: ModulePayload }) => {
  const [name, setName] = useState(module.name);
  const { updateModule, updateModuleResult } = useModules();

  const handleNameUpdate = async ({ name }) => {
    if (name !== module.name) {
      await updateModule({
        where: { id: module.id },
        data: {
          name: {
            set: name,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (Boolean(updateModuleResult.error)) {
      console.log({ error: updateModuleResult.error });
    }
  }, [updateModuleResult]);

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Icon
          type="hover"
          css={{
            br: "$round",
            position: "absolute",
            top: "50%",
            right: "1em",
            transform: "translateY(-50%)",
          }}
        >
          <DotsHorizontal />
        </Icon>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        side="bottom"
        align="end"
        alignOffset={-16}
        sideOffset={24}
      >
        <Input
          css={{ width: "15em" }}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleNameUpdate({ name })}
          value={name}
          placeholder="name"
        />
        <DialogConfirmDeleteModule module={module} />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
