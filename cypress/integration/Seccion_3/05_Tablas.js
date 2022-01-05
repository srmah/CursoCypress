/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Tablas",()=>{

    it ("Children",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)
        
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
    })

    it ("Seleccionar por EQ",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)
        
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})

     
    })

    it ("Seleccionar por Filter",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)
        
        cy.get("[type='button']").filter(".btn-warning").click()
     
    })

    it ("Seleccionar por Find y Contains",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)

        
        //por clase
        cy.get(".btn-group").find(".btn-warning").click()

        //por atributo
        cy.get("[type='button']").contains("Orange").click()

     
    })

    it ("Seleccionar los elementos siguientes (NextAll)",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)

        cy.get("[type='button']").should("contain","Green").nextAll("have.lenght",4)
     
    })

    it ("Seleccionar elemento padre para validar",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)

        cy.get("[type='button']").parent().should("have.class","btn-group")
     
    })

    it ("Reto de las tablas",()=>{         
        
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')
      
        cy.wait(1000)
        //pulsar todos los checks del filtro All
        cy.get("[type='button']").eq(4).should("contain","All").click()
        cy.get("[type='checkbox'").check({force:true} )
     
    })

    it ("Reto de las tablas con ciclo FOR",()=>{         
        
        
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq",'Selenium Easy - Table Data Filter Demo')      
        cy.wait(1000)      

        for (let x=1;x<=4;x++){

            cy.get("[type='button']").eq(x).click()
            cy.get("[type='checkbox'").check({force:true} ) 

        }     
    })

   
})// Cierre de describe