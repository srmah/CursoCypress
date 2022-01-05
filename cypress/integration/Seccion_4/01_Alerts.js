/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Alertas en Cypress",()=>{

    it ("Alerta 1",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(500)

        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()

        cy.on("window:alert",(str) =>{
            //no funciona, investigar
            expect(str).to.equal("This is the place where the content for the modal dialog displays").click()
        })

    
    })

    

})// Cierre de describe