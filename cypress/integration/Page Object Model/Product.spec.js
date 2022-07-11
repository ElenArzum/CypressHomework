import HomeSaucePage from "../../pages/HomeSaucePage";
import ProductsPage from "../../pages/ProductsPage";


describe('Login', () => {
    before(() => {
        cy.visit('/');
    });
    
    it('Should Login to Inventory Page', () => {
        HomeSaucePage.typeUserName('standard_user');
        HomeSaucePage.typePassword('secret_sauce');
        HomeSaucePage.clickLogin();
        ProductsPage.elements.title().should('have.text','Products');
        cy.wait(1000); 
        ProductsPage.elements.productsort().should('be.visible');
        cy.wait(500); 
        ProductsPage.elements.addToCardButton().scrollIntoView();
        ProductsPage.clickonaddtoCard();
        ProductsPage.elements.cartLink().scrollIntoView();
        ProductsPage.elements.cartLink().should("be.visible");
        ProductsPage.clickoncartlink();
        cy.url("/").should('include', 'cart.html')
        ProductsPage.clickRemove();
        ProductsPage.clickCheckout();
        cy.url("/").should('include', 'checkout-step-one.htm')
    

    });
});

