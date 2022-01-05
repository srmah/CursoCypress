/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Asserts",()=>{

    it ("11. Contains en toda la página",()=>{ 
        
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Simple Form to Automate using Selenium')

        cy.get('.at-cm-no-button').click({force:true})

        //ELIMINAR POP-UP
        cy.get('.form-group > #user-message').should("be.visible").type("isma")
        
        //buscamos todos los botones y seleccionamos el que tenga el texto "Show Message"
        cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

        let a=10
        let b =20

        //cambiamos el color de los campos con la función invoke
        
        cy.get('#sum1').should("be.visible").and("have.class","form-control").invoke("attr","style","color:blue").type(a)
        cy.get('#sum2').should("be.visible").and("have.class","form-control").invoke("attr","style","color:red").type(b)

        cy.contains("[type='button']","Get Total").should("be.visible").click({force:true})

        cy.get("#displayvalue").should("be.visible").then((e)=>{
                let res =e.text()
                let r=a+b
                cy.log(res)
                if(r==res){
                    cy.log("El resultado es correcto")
                }

                if(res>50){
                    cy.log("El resultado es correcto")
                }

        })

    })
})// Cierre de describe