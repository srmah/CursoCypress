/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


describe("Fechas",()=>{

    it ("Fecha 1",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should("eq",'Selenium Easy - Best Demo website for Bootstrap Date picker')
      
        cy.wait(1500)

        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("19/09/2021{esc}")
        cy.wait(1500)
        cy.get('#sandbox-container1 > .input-group > .form-control')
            .clear()

        //Seleccionar el día de hoy. inspeccionamos el elemnto y aparece la clase .today
        cy.get('#sandbox-container1 > .input-group > .input-group-addon')
            .should("be.visible")
            .click()

        cy.get(".today")
            .first()
            .click()
    })

    it ("Fecha 2",()=>{        
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should("eq",'Selenium Easy - Best Demo website for Bootstrap Date picker')
             

        cy.get('[placeholder="Start date"]').should("be.visible").type("09/09/2019{esc}")
        cy.get('[placeholder="End date"]').should("be.visible").clear().type("10/09/2019{esc}")
    })
    it ("Fecha 3",()=>{        
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should("eq",'Selenium Easy - Best Demo website for Bootstrap Date picker')
             

        cy.get('[placeholder="Start date"]').should("be.visible").type("09/09/2019{esc}").tab().type("17/09/2020{esc}")
       
    })


})// Cierre de describe