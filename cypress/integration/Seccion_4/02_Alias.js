/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Manejo Alias",()=>{

    it ("Alias 1",()=>{         
        
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq",'Input Validation')
        cy.wait(500)

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get("@nom").type("pedro")
    })

    

})// Cierre de describe