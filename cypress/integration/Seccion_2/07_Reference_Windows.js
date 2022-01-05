/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Referencias a Windows",()=>{

    it ("Propiedad Charset",()=>{ 
        
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq",'The Number Game')

        //vemos si la página está en UTF-8
        cy.document().should("have.property","charset").and("eq","UTF-8")
        
    })

    it ("Propiedad URL",()=>{ 
        
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq",'The Number Game')

        //validamos el final de la url
        cy.url().should("include","random-number.html")
        
    })

})// Cierre de describe