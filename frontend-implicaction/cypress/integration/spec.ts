describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/auth/sign-up');
    cy.contains('i');
  });
});
