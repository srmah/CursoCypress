/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Bucles for y each",()=>{

    it ("Each 1",()=>{         
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')
      
        cy.wait(1000)

        cy.get(".product-name").each(($el,index,$list)=>{

            cy.log(index)
            
            cy.log($list)
            let pos=$el.text()
            cy.log(pos)
        })

    })

    it ("Each 2",()=>{         
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')      
        cy.wait(1000)

        const datos=[]

        cy.get("#center_column .product-name").each(($el,index,$list)=>{

           datos [index] = $el.text()
           
        }).then(()=>{
            for (let x=0;x<datos.length/2; x++){

                cy.log("Producto número: "+(x+1))
                cy.get("#center_column .product-name").eq(x).click()           
                cy.get('#quantity_wanted').clear().type(4)
                cy.get('.exclusive > span').should("be.visible").click()
                cy.xpath("//a[@class='btn btn-default button button-medium'][contains(.,'Proceed to checkout')]").click()                    
                cy.get('.icon-home').click()
            }
        })
        

   
    })
})// Cierre de describe