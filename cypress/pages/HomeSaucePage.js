class homeSPage{

    elements =  {

        usernamefield: () => cy.get('#user-name'),
        passwordfield: () => cy.get('#password'),
        loginButton: () => cy.get ('#login-button'),
        ErrorMsg: () => cy.get('h3[data-test]'),
    }
    typeUserName(username){
        this.elements.usernamefield().type(username);
    }
    typePassword(password){
        this.elements.passwordfield().type(password);
    }
    clickLogin(){
        this.elements.loginButton().click();
    }
}
module.exports =  new homeSPage();
