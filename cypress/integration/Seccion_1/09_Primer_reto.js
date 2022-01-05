/// <reference types="Cypress"/>
require ('cypress-plugin-tab')

describe("Primer reto",()=>{

    it ("Click Sencillo",()=>{
        cy.visit("https://demoqa.com/webtables/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)


        
        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.get('#searchBox').should("be.visible").clear()

        //agregando registro
        cy.get('#addNewRecordButton').click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("Isma").tab()
        .type("Rubio").tab().type("irubio@gmail.com").tab().type("34").tab().type("37000").tab().type("QA")
        cy.get('#submit').should("be.visible").click()

        cy.get('#searchBox').should("be.visible").type("Isma")
        cy.get('#searchBox').should("be.visible").clear()

        //Editar un registro

        cy.get('#edit-record-2').click()
        cy.get('#age').should("be.visible").type("44")
        cy.get('#salary').should("be.visible").clear().type("5000")
        cy.get('#submit').should("be.visible").click()

        //Borrar registro
        cy.get('#delete-record-2').click()


       
    })
  

})// Cierre de describe