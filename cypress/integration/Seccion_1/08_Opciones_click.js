/// <reference types="Cypress"/>
require ('cypress-plugin-tab')

describe("Opciones de Click",()=>{

    it ("Click Sencillo",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

        
        cy.get('#txtUsername').should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").should("be.enabled").click()
    })
    
    it ("Click ForceTrue",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

        
        cy.get('#txtUsername').should("be.visible").type("Admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").should("be.enabled").click({force:true})
    })
    it ("Click por coordenadas (x,y)",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

        
        cy.get("#divLogo > img").should("be.visible").click(40,40)
        cy.get("#divLogo > img").should("be.visible").click(0,0)

    })

})// Cierre de describe