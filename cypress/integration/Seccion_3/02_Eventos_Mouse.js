/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


describe("Eventos mouse",()=>{

    it ("Drag and Drop",()=>{ 
        
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should("eq",'The Internet')
      
        cy.wait(1500)
        cy.get("#column-a").drag("#column-b",{force:true})
        
    })
    it ("Drag and Drop",()=>{ 
        
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Drag and Drop Demo')
      
        cy.wait(1500)        
        cy.get('#todrag > :nth-child(2)').drag("#mydropzone",{force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(3)').drag("#mydropzone",{force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(4)').drag("#mydropzone",{force:true})
        cy.wait(1500)
        cy.get('#todrag > :nth-child(5)').drag("#mydropzone",{force:true})
        cy.wait(1500)
               
    })

    it ("Mouseover",()=>{ 
        
        cy.visit("https://way2automation.com")
        cy.title().should("eq",'Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial')

        //cy.get('.eicon-close').should("be.visible").click()

        // Evitar que se abra en otra pestaña cy.get('.eicon-close').invoke("removeAttr","target").click()

        cy.contains('All Courses').trigger("mouseover").invoke("removeAttr","target").click()
      
    })

    it ("Slider",()=>{ 
        
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")

        cy.title().should("eq",'Selenium Easy - Drag and Drop Range Sliders')

        //2 maneras de cambiar el valor, modificando el campo value y utilizando argumento val para cambiar valores
        cy.get('#slider1 > .range > input').invoke('attr',"value","80")
        cy.wait(2000)
        cy.get('#slider1 > .range > input').invoke('val',"70")
        cy.get('#range').invoke("text","70")

 
    })



})// Cierre de describe