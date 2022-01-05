/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Record Cypress Studio.", () =>{
    it("Invoke text", () =>{
        let tiempo=1500

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').clear();
        cy.get('#userName').type('rodrigo');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('rodrigo@gmail.com');
        cy.get('#currentAddress').click();
        cy.get('#currentAddress').type("dirección uno");
        cy.get('#permanentAddress').click();
        cy.get('#permanentAddress').type("Dirección dos")
        cy.get('#submit').click();
        cy.wait(tiempo)
        /* ==== End Cypress Studio ==== */
    })

    /* === Test Created with Cypress Studio === */
    it('Test_checkbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/checkbox');
        cy.get('.rct-collapse > .rct-icon').click();
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-excelFile').check({force: true});
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-wordFile').check({force: true});
        cy.get(':nth-child(2) > .rct-text > .rct-collapse > .rct-icon > path').click({force: true});
        cy.get(':nth-child(2) > ol > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-general').check({force: true});
        cy.get(':nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-classified').check({force: true});
        cy.get(':nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-private').check({force: true});
        cy.get(':nth-child(2) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').click({force: true});
        cy.get('#tree-node-public').check({force: true});
        /* ==== End Cypress Studio ==== */
    });
});