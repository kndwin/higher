import { mount } from "@cypress/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders", () => {
    const text = "Hello World";
    mount(<Text data-cy="render">{text}</Text>);
    cy.get('[data-cy="render"]').should("contain", text);
  });
});
