export {};
describe("Show landing page", () => {
  it("show landing page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "Higher");
  });
});
