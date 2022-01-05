describe("Bienvenido al curso de Cypress Sección 1",()=>{


    it ("Segundo Test -> Campo Name",()=>{
        cy.visit("https://demoqa.com/text-box")

        let cantidad = Math.floor(Math.random() *9000)
        cy.get("#userName").type("Isma"+cantidad)

        //Random de un array
        
        let datos =["1111","2222","3333"]
        cantidad = Math.floor(Math.random() * datos.length)
        cy.get("#userEmail").should("be.visible").type("Isma"+datos[cantidad])

    })


})// Cierre de describe