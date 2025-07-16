// cypress/support/Utils/registerUtils.js

export function registerNewUser() {
  cy.fixture("user").then((user) => {
    cy.visit(Cypress.env("ODOO_URL"));
    cy.get('a[href="actions/Catalog.action"]').click();
    cy.get('a[href="/actions/Account.action?signonForm="]').click();
    cy.get('a[href="/actions/Account.action?newAccountForm="]').click();
    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="repeatedPassword"]').type(user.password);
    cy.get('input[name="account.firstName"]').type(user.firstName);
    cy.get('input[name="account.lastName"]').type(user.lastName);
    cy.get('input[name="account.email"]').type(user.email);
    cy.get('input[name="account.phone"]').type(user.phone);
    cy.get('input[name="account.address1"]').type(user.address1);
    cy.get('input[name="account.address2"]').type(user.address2);
    cy.get('input[name="account.city"]').type(user.city);
    cy.get('input[name="account.state"]').type(user.state);
    cy.get('input[name="account.zip"]').type(user.zip);
    cy.get('input[name="account.country"]').type(user.country);
    cy.get('select[name="account.languagePreference"]').select(user.languagePreference);
    cy.get('select[name="account.favouriteCategoryId"]').select(user.favouriteCategory);
    cy.get('input[name="account.listOption"]').check();
    cy.get('input[name="account.bannerOption"]').check();
    cy.get('input[name="newAccount"]').click();
  });
}
