class loginPage {
    inputFormLogin(username, pass){
        cy.get('[name="user_guid"]').type(username)
        cy.get('[name="user_password"]').type(pass)
        cy.get('.btn').click()
    }
};

export default new loginPage(); 