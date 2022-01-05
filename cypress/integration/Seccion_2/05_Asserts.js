/// <reference types="Cypress"/>

require ('cypress-plugin-tab')
require ('cypress-xpath')

describe("Reto de los Selects",()=>{

    it ("1. Assert Contains",()=>{
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')

       //Clickar dentro de un conjunto
       cy.get('#block_top_menu').contains("Women").click()
    })

    it ("2. Assert Find, eq",()=>{        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')

       //Clickar dentro de un conjunto
       cy.get('#block_top_menu').contains("Women").click()
       cy.get('.product-container').find(".product-image-container").eq(2).click()
    })   

    it ("3. Assert Contains, Validando que el vestido es nuevo",()=>{        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')

       //Verificar estado new
       cy.get('#block_top_menu').contains("Women").click()
       cy.get('.product-container').find(".product-image-container").eq(2).click()
       
       cy.get('#product_condition').contains("New").then(()=>{  

        cy.log("El producto está nuevo")
       })
    }) 

    it ("4. Assert Find, eq - Validando que el vestido es nuevo y su precio",()=>{        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq",'My Store')

       //Verificar estado new
       cy.get('#block_top_menu').contains("Women").click()
       cy.get('.product-container').find(".product-image-container").eq(2).click()
       
       cy.get('#product_condition .editable').then((e)=>{  

        if(e.text()=="New"){

            cy.log("El estado del vestido es nuevo")
        }
       })

       cy.get('#our_price_display').then((a)=>{

        //Con la funcion slice cortamos un string por donde queremos, en este caso queremos que nos devuelva desde la posición 1 hasta la 3

        let precio=a.text().slice(1,3)
        cy.log(precio)

        if (precio>50){
            cy.log("El vestido es caro")

        }else{
            cy.log("El vestido es barato")
            }
        })
    }) 

    it ("5. Assert contain.text y have.text",()=>{        
        cy.visit("http://demoqa.com/text-box")
        cy.title().should("eq",'ToolsQA')
        cy.get('#userName').should("be.visible").type("Isma")
        cy.get('#userEmail').should("be.visible").type("isma@isma.com")
        cy.get('#submit').should("be.visible").click()
        
        //"have.text" el texto tiene que ser idéntico
        cy.get('#name').should("have.text","Name:Isma")
        
        cy.get('#name').should("contain.text","Isma")
    })

    it ("6. Assert have.text + then",()=>{        
        cy.visit("http://demoqa.com/text-box")
        cy.title().should("eq",'ToolsQA')

        cy.get('#userName').should("be.visible").type("Isma")
         
        //en un campo editable, el texto es un valor se puede utilizar have.value (valor idéntico) o contains.value
        cy.get('#userName').should("contain.value","Isma").then(()=>{
           
            cy.get('#userEmail').should("be.visible").type("isma@isma.com")
            cy.get('#submit').should("be.visible").click()
                 
        })
 
        //"have.text" el texto tiene que ser idéntico
        cy.get('#name').should("have.text","Name:Isma")        
        cy.get('#name').should("contain.text","Isma")
    })

    it ("7. Assert have.class",()=>{        
        cy.visit("http://demoqa.com/text-box")
        cy.title().should("eq",'ToolsQA')

        cy.get('#userName').should("be.visible").should("have.class","mr-sm-2").type("Isma")
         
     
        cy.get('#userName').should("contain.value","Isma").then(()=>{
           
            cy.get('#userEmail').should("be.visible").type("isma@isma.com")
            cy.get('#submit').should("be.visible").click()
                 
        })
    })

    it ("8. Assert have.class + función and",()=>{        
        cy.visit("http://demoqa.com/text-box")
        cy.title().should("eq",'ToolsQA')

        cy.get('#userName').should("be.visible").and("have.class","mr-sm-2").then(()=>{
           
            cy.get('#userEmail').should("be.visible").type("isma@isma.com")
            cy.get('#submit').should("be.visible").click()                 
        })
    })

    it ("9. Assert not.be.visible not.have.class ",()=>{        
        cy.visit("http://demoqa.com/text-box")
        cy.title().should("eq",'ToolsQA')

        cy.get('#userName').should("not.be.visible").and("not.have.class","mr-sm-2")
    })


    it ("10. Assert length y css",()=>{        
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should("eq",'Selenium Easy - Table with Pagination Demo')

        //selecciono la tabla y con ">" indico que me seleccione todos los tr
        cy.get('#myTable >tr').should("have.length",13)

        //selecciono la tabla y con ">" indico que me seleccione todos los tr y tambien los td
        cy.get('#myTable >tr >td').should("have.length",91)

        //selecciono la tabla y con ">" indico que me seleccione todos los tr y tambien los td, y valido los estilos
        cy.get('#myTable >tr >td').should("have.length",91).and("have.css", "padding","8px")
    })

    it.only ("11. Contains en toda la página",()=>{ 
        
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should("eq",'Selenium Easy Demo - Simple Form to Automate using Selenium')

        cy.get('.at-cm-no-button').click({force:true})

        cy.get('.form-group > #user-message').should("be.visible").type("isma")
        
        //buscamos todos los botones y seleccionamos el que tenga el texto "Show Message"
        cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

    })


})// Cierre de describe