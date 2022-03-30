describe("My First Test", () => {
  it("Visit implication", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("runner container");
  });
});

describe("Attempt to sign in", () => {
  it("should have link to sign in", () => {
    cy.get("http://localhost:8080/auth/sign-up").click();
  });
});
