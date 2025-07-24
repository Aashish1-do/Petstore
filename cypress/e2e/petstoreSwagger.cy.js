describe('Verify petstore application can be login successfully', () => {

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.visit('https://reqres.in/');
  });

  it('Signing with registered email', () => {
    cy.Signingmodule();
  });
})