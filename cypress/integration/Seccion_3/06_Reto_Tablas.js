/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"



describe("Reto tablas",()=>{

    it ("Mostrar campos de una tabla",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq",'Selenium Easy - Tabel Sort and Search Demo')
      
        cy.wait(1000)
        
        const datos=[]

        cy.get("[role='row'] td").each(($el,index,$list)=>{

            datos[index] = $el.text()

        }).then(()=>{

            for (let i=0; i<=datos.length;i++){

                cy.log(datos[i])
            }
        })
    })

    it ("Sumando los valores de los campos con la class .odd",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq",'Selenium Easy - Tabel Sort and Search Demo')
      
        cy.wait(1000)
        
        const datos=[]
        let cantidadOdd=0

        cy.get("[role='row'] td").each(($el,index,$list)=>{

            datos[index] = $el.text()

        }).then(()=>{

            for (let i=0; i<=datos.length;i++){

                cy.log(datos[i])
                if(Number(datos[i]) ){
                    cantidadOdd+=Number(datos[i])
                 }
            }
            cy.log("La cantidad de años son "+cantidadOdd)
            
        })
        
    })
    it.only ("Averiguar el valor de una celda",()=>{         
        
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should("eq",'Selenium Easy - Tabel Sort and Search Demo')
      
        cy.wait(1000)

        const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)')

        campo.each(($el,index,$list)=>{
            const dato= $el.text()
            cy.log(dato)

            if(dato.includes("Javascript Developer")){

                campo.eq(index).next().next().then((age)=>{

                    const Edad = age.text()
                    cy.log(Edad)
                    cy.log("La edad de Javascript Developer es:"+ Edad)
                    expect(Edad).to.equal("39")
                })
            }      

        })
 
        
    })

})// Cierre de describe