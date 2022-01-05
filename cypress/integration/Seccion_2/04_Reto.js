/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Reto de los Selects",()=>{

    it ("1. Reto select",()=>{
        //cy.viewport(1280,720)
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title().should("eq",'Selenium Easy - JQuery Dual List Box Demo')

        cy.get(".pickData").select( ["Giovanna","Manuela","Maria Eduarda"]).then(()=>{
            cy.get(".pAdd").should("be.visible").click().then(()=>{
                cy.get('.pAddAll').should("be.visible").click();
                cy.log("Se movieron todos los elementos")
            })
        })
        
        cy.get('.pRemoveAll').should("be.visible").click();
    })
})// Cierre de describe