/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
import "cypress-file-upload"


describe("Referencias a Windows",()=>{

    it ("Propiedad Charset",()=>{ 
        
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq",'ToolsQA')

        //vemos si la página está en UTF-8
        cy.document().should("have.property","charset").and("eq","UTF-8")
        
        const ruta= "img1.png"

        cy.get("[type='file']").attachFile(ruta)


    })


})// Cierre de describe