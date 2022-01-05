/// <reference types="Cypress"/>
describe("Sección 1: Validando el título ",()=>{

    it ("Test validar el título de la página",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
        cy.log("OK la funcion title es correcta")
    })


})// Cierre de describe