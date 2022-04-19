
  describe('Test Cypress Entreprise', () => {
    it('Visits the Entreprise project page', () => {
      cy.visit('http://localhost:8081');
      cy.get('.nav-link').contains('Espace entreprise').click()
      

      //Vérifie la présence des menus Accueil et Espace entreprise
      cy.get('.nav-link').contains('Accueil')
      cy.get('.nav-link').contains('Espace entreprise')
      cy.url().should('eq', 'http://localhost:8081/entreprise')
      cy.contains('Espace Entreprise')
      cy.get('.text-decoration-none').contains('recrutement@implicaction.eu')
      
    });
  });
