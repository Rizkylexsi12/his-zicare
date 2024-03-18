class screenAntrian{
    constructor(){
        this.antrian;
    }
    
    open(){
        cy.visit('/screen/daftar?loc=220718.000004')
        cy.log('sukses open link')  
    }

    getLastQueue(){
        cy.get(':nth-child(2) > [style="height: 100%; max-width: 100%; margin: 0px 10px; display: grid; grid-template-columns: repeat(1, 1fr); grid-auto-rows: 2fr; gap: 15px;"] > [style="vertical-align: top; width: 100%; position: relative; font-weight: 800;"] > .row > .col-sm-12 > [style="font-size: xxx-large;"]').invoke('text').then((text) => {
           this.antrian = text
        })
    }

    chooseTypeTicket(type){
        cy.get('h1').contains(type).click()
    }
}

export default new screenAntrian()