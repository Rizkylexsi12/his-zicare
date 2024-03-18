import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../element_pages/homePage";
import loginPage from "../element_pages/loginPage";
import foRajalPage from "../element_pages/fo-rajal-page";
import screenAntrian from "../element_pages/screen-antrian";

Given('ax user login as FO Rajal', () => {
    cy.visit('/login')
    loginPage.inputFormLogin('joko', 'joko')
    homePage.validatedLogin('joko')
    homePage.validatedRole('FO Rajal')
})

When('Pasien mendatangi FO Rajal sesuai nomor antrian', ()=> {
    cy.reload()
    cy.get('.fa-bullhorn').should('be.visible').then(()=>{
        cy.get('.fa-bullhorn').click();
    })
    foRajalPage.checkListQueue('ANTRIAN RAWAT JALAN', 'Loket No. 1', 'U1')
})

// And('FO Rajal melakukan input data pasien', () => {

// })

// And('FO Rajal memilih dokter untuk pasien', () => {

// })

// Then('Pasien menerima surat kunjungan untuk dokter', ()=> {

// })