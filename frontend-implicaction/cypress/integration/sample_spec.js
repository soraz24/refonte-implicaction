describe("My First Test", () => {
  it("Visit implication", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("type").click();
    // Should be on a new URL which includes '/commands/actions'

    cy.url().should("include", "/auth/sign-up");
  });
});

describe("My second Test", () => {
  it("Visit implication", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("type").click();
    // Should be on a new URL which includes '/commands/actions'

    cy.url().should("include", "/auth/sign-up");
  });
});

// describe("Attempt to sign in", () => {
//   it("should have link to sign in", () => {
//     cy.get("http://localhost:8080/auth/sign-up").click();
//   });
// });
