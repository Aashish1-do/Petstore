Cypress.Commands.add('loginWithSession', () => {
  cy.session('user-session', () => {
  cy.request("GET", "/actions/Account.action?signonForm=").then(() => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.octoperf.com/actions/Account.action',
      form: true,
      body: {
        login: 'player',
        password: 'matha777',
        redirect: '/'
      }
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 302]);
    });
  });
});
});

Cypress.Commands.add("loginWithEnv", () => {
  cy.visit(Cypress.env("ODOO_URL"));
  cy.get('a[href="actions/Catalog.action"]').click();
  cy.get('a[href="/actions/Account.action?signonForm="]').click();
  cy.get('input[name="username"]').type(Cypress.env("ODOO_USER"));
  cy.get('input[name="password"]').type(Cypress.env("ODOO_PASSWORD"));
  cy.get('input[name="signon"]').click();
});

Cypress.Commands.add("registerNewUser", () => {
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
});

Cypress.Commands.add("addtoCart", () => {
  cy.fixture("product").then((data) => {
    cy.get(`a[href="/actions/Catalog.action?viewCategory=&categoryId=${data.category}"]`).first().click();
    cy.get(`a[href="/actions/Catalog.action?viewProduct=&productId=${data.productId}"]`).click();
    cy.get(`a[href="/actions/Cart.action?addItemToCart=&workingItemId=${data.itemId}"]`).click();
    cy.get(`input[name="${data.itemId}"]`).clear().type(data.quantity);
    cy.get('input[name="updateCartQuantities"]').click();
    cy.get('a[href="/actions/Order.action?newOrderForm="]').click();
  });
});


Cypress.Commands.add("searchingModule" , () => {
cy.visit(Cypress.env("ODOO_URL"));
cy.get('a[href="actions/Catalog.action"]').click();
cy.get('input[name="keyword"]').clear().type("dog");
cy.get('input[name="searchProducts"]').click();
cy.contains('a', 'Return to Main Menu').click();
})

Cypress.Commands.add("Signingmodule", () => {
cy.get('a[href="https://app.reqres.in"]').click();
cy.get('a.nav-link.active[href="/visualize"]').click();
})