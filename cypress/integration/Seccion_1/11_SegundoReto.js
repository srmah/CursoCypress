/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')
describe("Segundo Reto",()=>{

    it ("Probando la aplicación",()=>{
        //cy.viewport(1280,720)
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1000)


        //Introducimos una búsqueda
        cy.get('#searchbox').should("be.visible").type("ACE{enter}")
        
        //Añadimos registro
        cy.xpath("//a[contains(@id,'add')]").should("be.visible").click()
        cy.get('#name').type("IsMAC")
        cy.get('#introduced').should("be.visible").type("2021-03-15")
        cy.get('#discontinued').should("be.visible").type("2025-02-12")

        //Combo

        cy.get('#company').should("be.visible").select("Nokia").should("have.value","16")
        cy.get('.primary').should("be.visible").click()

        cy.get('#searchbox').should("be.visible").type("IsMAC{enter}")
    })
  

})// Cierre de describe