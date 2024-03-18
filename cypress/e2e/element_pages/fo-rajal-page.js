class foRajalPage{
    constructor(){
        this.antrian;
    }
    
    checkListQueue(location, num_locket, lastQueue){
        cy.get('.multiselect__content-wrapper').invoke('show')
        cy.get('.option__title').contains(location).click({force: true})
        cy.get('.option__title').contains(num_locket).click({force: true})
        cy.get('.bg-soft-orange').click()
        cy.log(lastQueue)
        cy.get('.text-bigger').contains(lastQueue)
    }
}

export default new foRajalPage()