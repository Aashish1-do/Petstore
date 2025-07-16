export function addToCart() {
  cy.fixture("product").then((data) => {
    cy.get(`a[href="/actions/Catalog.action?viewCategory=&categoryId=${data.category}"]`).first().click();
    cy.get(`a[href="/actions/Catalog.action?viewProduct=&productId=${data.productId}"]`).click();
    cy.get(`a[href="/actions/Cart.action?addItemToCart=&workingItemId=${data.itemId}"]`).click();
    cy.get(`input[name="${data.itemId}"]`).clear().type(data.quantity);
    cy.get('input[name="updateCartQuantities"]').click();
    cy.get('a[href="/actions/Order.action?newOrderForm="]').click();
  });
}
