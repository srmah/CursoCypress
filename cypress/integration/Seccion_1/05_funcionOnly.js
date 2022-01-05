/// <reference types="Cypress"/>
//reference types para que funcione la ayuda de comandos

//sirve para ejecutar solamente la prueba que le pongas .only en el it
describe("Ejemplo de función only",()=>{

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