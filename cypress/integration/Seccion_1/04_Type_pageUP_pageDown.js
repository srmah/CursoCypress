/// <reference types="Cypress"/>
//reference types para que funcione la ayuda de comandos


describe("Ejemplo de Type pageUp y pageDown",()=>{

    it ("Type pageUp ",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(2000)
        cy.get('#userName').type('{pageup}')
    })

    it ("Type pageDown",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(2000)
        cy.get('#userName').type('{pagedown}')
    })

})// Cierre de describe