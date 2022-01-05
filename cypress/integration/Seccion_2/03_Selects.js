/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Nueva sección Selects",()=>{

    it ("Combo",()=>{
        //cy.viewport(1280,720)
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)
        
        cy.get('#select-demo').should("be.visible").select("Friday").should("have.value","Friday")
            
    })
    it ("Selección autocompletar",()=>{
        //cy.viewport(1280,720)
        cy.visit("www.google.com")
        cy.title().should("eq",'Google')
        cy.wait(1000)
        cy.get("#L2AGLb").click()
        cy.get('.gLFyf').type("Ferrari").type('{downarrow}{enter}')
    })

    it.only ("Selección multiselect",()=>{
        //cy.viewport(1280,720)
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Automate All Scenarios')

        cy.get('#multi-select').should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get('#printMe').should("be.visible").click()
        })
       
    })



})// Cierre de describe