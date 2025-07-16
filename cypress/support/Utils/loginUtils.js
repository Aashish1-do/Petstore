// Cypress/support/Utils/loginutils.js

export function loginWithEnv() {
  cy.visit(Cypress.env("ODOO_URL"));
  cy.get('a[href="actions/Catalog.action"]').click();
  cy.get('a[href="/actions/Account.action?signonForm="]').click();
  cy.get('input[name="username"]').type(Cypress.env("ODOO_USER"));
  cy.get('input[name="password"]').type(Cypress.env("ODOO_PASSWORD"));
  cy.get('input[name="signon"]').click();
}
