import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../element_pages/homePage";
import loginPage from "../element_pages/loginPage";
import screenAntrian from "../element_pages/screen-antrian";

const base_url = 'https://his-qa.zicare.id'

Given('an user login as Admin Antrian', () => {
    cy.visit(base_url, '/login')
    loginPage.inputFormLogin('joko', 'joko')
    homePage.validatedLogin('joko')
    homePage.validatedRole('Admin Antrian')
})

When('Pasien mengambil nomor antrian pada mesin tiket', ()=> {
    screenAntrian.open()
    screenAntrian.getLastQueue()
    screenAntrian.chooseTypeTicket('UMUM')
})

Then('Pasien menerima nomor antrian', ()=> {
    cy.log("antrian terakhir = "+ screenAntrian.antrian)    
})
