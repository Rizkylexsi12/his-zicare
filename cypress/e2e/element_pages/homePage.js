class homePage{
    constructor(){
        this.label_user = '.label > strong';
    }
    
    validatedLogin(account){
        cy.get(this.label_user).should('have.text', account.toUpperCase());  
    }

    validatedRole(expected_role){
        cy.get('.sub-title > .dropdown-toggle').invoke('text').then((text) => {
            cy.log("role saat ini adalah : " + text)
            if(text.trim() !== expected_role.trim()){
                cy.get('.sub-title > .dropdown-toggle').contains(text).click()
                cy.wait(1000)
                cy.get('.multiselect__content-wrapper').invoke('show')
                cy.get('.option__title').contains(expected_role).click({force: true})
                cy.log('sukses ubah role menjadi = ' + expected_role)
            }
        })
    }
};

export default new homePage(); 