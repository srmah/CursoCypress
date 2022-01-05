/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Manejo de Invoke.", () =>{
    it("Invoke text", () =>{
        let tiempo=1500

        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').click();
        cy.get('#userName').type('demo');
        cy.get('#userEmail').type('demo@gmail.com');
        cy.get('#currentAddress').type('demo uno');
        cy.get('#permanentAddress').type('demo uno');
        cy.get('#submit').click();
        cy.get('#submit').click();
        cy.get('.show #item-7').click();
        cy.get('.show #item-2').click();
        cy.get('.show #item-1 > .text').click();
        cy.get('.show #item-3 > .text').click();
        
     

    })

  
});