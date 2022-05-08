import type { ReactNode } from "react";
import Link from "next/link";

import { styled } from "stitches.config";
import { Flex, Icon, Text, ConditionalWrapper } from "components/shared";
import { ChevronIcon } from "components/icons";

export const Breadcrumbs = ({ items, ...props }) => {
  return (
    <Flex css={{ gap: "$1" }}>
      {items.map(({ icon, label, href }, index: number) => (
        <Flex key={`${label}-${index}`}>
          <ConditionalWrapper
            condtion={Boolean(href)}
            wrapper={(children: ReactNode) => (
              <Link href={href}>
                <div style={{ cursor: "pointer" }}>{children}</div>
              </Link>
            )}
          >
            <StyledItem css={{ width: "fit-content" }}>
              <Icon>{icon}</Icon>
              <Text css={{ whiteSpace: "nowrap" }}>{label}</Text>
            </StyledItem>
          </ConditionalWrapper>
          {index < items.length - 1 && (
            <Icon>
              <ChevronIcon orientation="right" />
            </Icon>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

const StyledItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  pr: "$2",
  br: "$1",
  "&:hover": {
    background: "$slate4",
    cursor: "pointer",
  },
});
