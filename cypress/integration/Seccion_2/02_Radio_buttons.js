/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Nueva sección Radio Buttons",()=>{

    it ("Radio Button",()=>{
        //cy.viewport(1280,720)
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000)
        
        cy.xpath("(//input[contains(@type,'radio')])[2]").should("be.visible").check().should("be.checked")
        cy.get('.panel-body > :nth-child(2) > input').should("be.visible").check().should("be.checked")
       

        //cy.get('[type="checkbox"]').should("be.visible").uncheck().should("not.be.checked")
    })



})// Cierre de describe