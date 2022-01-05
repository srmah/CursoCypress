/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Manejo de Invoke.", () =>{
    it("Invoke text", () =>{
        let tiempo=1500

        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq','ToolsQA')
     

    })

    /* === Test Created with Cypress Studio === */
    it('Test2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').clear();
        cy.get('#userName').type('rodrigo');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('rodrigo@gmail.com');
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    });

    /* === Test Created with Cypress Studio === */
    it('Test3', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').clear();
        cy.get('#userName').type('Erika');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('erika@gmail.com');
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    });
});