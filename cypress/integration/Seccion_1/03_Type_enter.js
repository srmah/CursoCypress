/// <reference types="Cypress"/>
//reference types para que funcione la ayuda de comandos


describe("Type ENTER",()=>{

    it (" ",()=>{
        cy.visit("www.google.com")
        cy.title().should("eq","Google")
        cy.wait(1500)
        //cy.get('sidebar').scrollTo('bottom')
        cy.get("#L2AGLb").click()

        cy.get("[name='q']").type("Cypress io{enter}")     

    })


})// Cierre de describe