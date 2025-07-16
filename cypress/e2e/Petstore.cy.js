import { loginWithEnv } from "../support/Utils/loginUtils";
import { registerNewUser } from '../support/Utils/registerNewUser';
import { addToCart } from '../support/Utils/addToCart';
import { searchingModule } from '../support/Utils/searchingModule';

describe('Verify petstore application can be login successfully', () => {

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.loginWithSession();
    cy.visit('https://petstore.octoperf.com/');
    cy.get('a[href="actions/Catalog.action"]').click();
  });

  it('login with valid data', () => {
    loginWithEnv();
  });

  it('verify that register the new account created successfully', () => {
  registerNewUser();
  });

  it('added to cart', () => {
    loginWithEnv();
    addToCart();
  });

  it('searching module', () => {
    searchingModule();
  })

  it('should show Sign Out button after login', () => {
    cy.visit('https://petstore.octoperf.com/');
   cy.get('a[href="actions/Catalog.action"]').click();
  cy.get('a[href="/actions/Account.action?signonForm="]').click();
    cy.get('input[name="username"]').type('Aashish123');
  cy.get('input[name="password"]').type('matha777');
  cy.get('input[name="signon"]').click();
    cy.get('a[href="/actions/Account.action?signoff="]').click(); 
  });

 })