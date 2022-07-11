import HomeSaucePage from "../../pages/HomeSaucePage";
import ProductsPage from "../../pages/ProductsPage";


describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Should Login to Inventory Page', () => {
        HomeSaucePage.typeUserName('standard_user');
        HomeSaucePage.typePassword('secret_sauce');
        HomeSaucePage.clickLogin();
        ProductsPage.elements.title().should('have.text','Products');
    });
    it('Should display Locked message', () => {
        HomeSaucePage.typeUserName('locked_out_user');
        HomeSaucePage.typePassword('secret_sauce');
        HomeSaucePage.clickLogin();
        HomeSaucePage.elements.ErrorMsg().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    });
    it('Should display incorrect password', () => {
        HomeSaucePage.typeUserName('standard_user');
        HomeSaucePage.typePassword('123');
        HomeSaucePage.clickLogin();
        HomeSaucePage.elements.ErrorMsg().should('have.text','Epic sadface: Username and password do not match any user in this service')
    });

});

