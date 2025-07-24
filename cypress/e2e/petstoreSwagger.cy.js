describe('Verify that petstoreSwagger application can be sign up successfully', () => {

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.visit('https://reqres.in/');
  });

  it('Signing with registered email', () => {
    cy.Signingmodule();
  });
})