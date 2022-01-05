describe("Bienvenido al curso de Cypress Sección 1",()=>{

    it ("Mi primer test -> Hola mundo",()=>{
        cy.log("Hola mundo")
        cy.wait(1500)
    })

    it ("Segundo Test -> Campo Name",()=>{
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Isma")
        cy.wait(4000)
    })


})// Cierre de describe