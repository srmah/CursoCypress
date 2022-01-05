/// <reference types="Cypress"/>
require ('cypress-plugin-tab')

describe("Ejemplo función tab",()=>{

    it ("Type con tab",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(2000)
        cy.get("#userName").type("Isma").tab()
        .type("Rubio").tab()
        .type("Rubio@gmail.com")        
    })

})// Cierre de describe