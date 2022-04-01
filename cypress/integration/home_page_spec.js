/*describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:8080') // change URL to match your dev URL
    })
  })*/

  describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/');
      cy.contains('Accueil');

      //Vérifie la présence des menus Accueil et Espace entreprise
      cy.get('.nav-link').contains('Accueil')
      cy.get('.nav-link').contains('Espace entreprise')

      //Vérifie la présence des boutons ci-dessous
      cy.get('.btn').contains('Se connecter')
      cy.get('.btn').contains('Adhérer à l\'association')
      cy.get('.btn').contains('Tout voir')

      //Vérifie la présence des éléments ci_dessous dans le menu
      cy.get('body').contains('Adhérer à l\'association')
      cy.get('body').contains('Prochains événements')
      cy.get('body').contains('Dernières publications')
      cy.get('body').contains('Nouvelles offres')
      cy.get('body').contains('Tout voir')
     

      //verification redirection à la page accueil lors du click 
      //sur le logo
      cy.get('.align-items-center > .img-fluid').click()
      cy.url().should('eq', 'http://localhost:8081/')

      //verification redirection à la page accueil lors du click 
      //sur le menu Esppace entreprise
      cy.get('.d-none > :nth-child(2) > .nav-link').click()
      cy.url().should('eq', 'http://localhost:8081/entreprise')


      //verification redirection à la page se connecter lors du click 
      //sur le bouton
      cy.get('.user-options > :nth-child(1) > .btn').click() 
      cy.url().should('eq', 'http://localhost:8081/auth/login')

      //verification redirection à la page signup lors du click 
      //sur le bouton
      cy.get(':nth-child(2) > .btn').click()
      cy.url().should('eq', 'http://localhost:8081/auth/sign-up')
       
      
    });
  });