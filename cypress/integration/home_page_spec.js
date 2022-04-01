/*describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:8080') // change URL to match your dev URL
    })
  })*/

  describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/');
      cy.contains('i');
    });
  });