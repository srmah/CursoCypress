/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Nueva sección Checkbox",()=>{

    it ("Check uno",()=>{
        //cy.viewport(1280,720)
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)


        //Seleccionar todos los checkbox y comprobar que están marcados
        cy.get('[type="checkbox"]').should("be.visible").check().should("be.checked")
        //Deseleccionar todos los checkbox y comprobar que están desmarcados
        cy.get('[type="checkbox"]').should("be.visible").uncheck().should("not.be.checked")
    })

    it ("Check por selección",()=>{
        
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)


        //Seleccionar un checkbox y comprobar que está marcado
        cy.get('#isAgeSelected').should("be.visible").check().should("be.checked")
        cy.get(':nth-child(5) > label > .cb1-element').click().should("be.checked")
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").check().should("be.checked")
  
    })

})// Cierre de describe