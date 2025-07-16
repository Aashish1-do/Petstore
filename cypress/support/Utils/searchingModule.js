export function searchingModule() {
  cy.visit(Cypress.env("ODOO_URL"));
  cy.get('a[href="actions/Catalog.action"]').click();
  cy.get('input[name="keyword"]').clear().type("dog");
  cy.get('input[name="searchProducts"]').click();
  cy.contains('a', 'Return to Main Menu').click();
}
