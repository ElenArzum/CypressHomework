class Productspage{
elements = {
    title: () => cy.get('.title'),
    cartLink: () => cy.get('#shopping_cart_container > a'),
    productsort: () =>cy.get('[data-test="product_sort_container"]'),
    inventoryItem:() =>cy.get('a#item_4_title_link > div'),
    addToCardButton:() =>cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    addedProduct:() =>cy.get('.inventory_item_name'),
    removebutton:() => cy.get('#remove-sauce-labs-backpack'),
    contshopping:() =>cy.get('#continue-shopping'),
    menuitem:() =>cy.get('react-burger-menu-btn'),
    checkout:() =>cy.get('#checkout')

}
    clickonItem(ClickItem){
        this.elements.inventoryItem().click();
    }
    clickonaddtoCard(AddtoCard){
        this.elements.addToCardButton().click();
    }
    clickoncartlink(Cartlink){
        this.elements.cartLink().click();
    }
    clickRemove(Remove){
        this.elements.removebutton().click();
    }
    clickCheckout(Checkout){
        this.elements.checkout().click();
    }
}
module.exports = new Productspage();