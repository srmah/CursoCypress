/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Manejo Invoke",()=>{

    it ("Alias text",()=>{         
        
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq",'Input Validation')
        cy.wait(500)

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")

        cy.get("[for='firstname']").invoke("text").as("title")

        cy.get("@title").should("contain","First name:").then(()=>{
            cy.get("#firstname").type("Isma")
        })
    })
    it ("Alias style",()=>{         
        
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq",'Input Validation')
        cy.wait(500)

        cy.get("[for='firstname']").invoke("attr","style","color:Blue; font-size: 80px")
             
    })
    it ("Invoke ocultar y mostrar",()=>{         
        
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq",'Input Validation')
        cy.wait(500)

        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide")

        cy.get("[for='firstname']").invoke("show", "4s")
        cy.get("#firstname").invoke("show")
             
    })
    it ("Invoke src",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(500)

        cy.get('.cbt').invoke("attr","src").should("include","http://demo.seleniumeasy.com/img/sponsored-by-CBT.png")
    })
    it.only ("Evitar target blank (Que un enlace se abra en una nueva pestaña",()=>{         
        
        cy.visit("https://dvwa.co.uk")
        cy.title().should("eq",'DVWA - Damn Vulnerable Web Application')
        cy.wait(500)

        cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke("removeAttr", "target").click({force:true})
    })


    

})// Cierre de describe