/// <reference types="Cypress"/>
require ('cypress-plugin-tab')

describe("Introducción a los asserts",()=>{

    it ("Demo de los asserts",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')

        
        cy.get("#firstName").should("be.visible").type("Isma")
        cy.get("#lastName").should("be.visible").type("Rubio")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("Rubio")

    })

})// Cierre de describe