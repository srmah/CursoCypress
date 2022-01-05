/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Prueba del record seis", () =>{
    it("Test de prueba", () =>{
        let tiempo=1500


        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('tr:nth-child(1) > td').click();
        cy.get('tr:nth-child(1) input').click();
        cy.get('tr:nth-child(1) input').type('rodrigo');
        cy.get('tr:nth-child(2) input').type('rorro');
        cy.get('textarea').type('demo del textoComments...');
        cy.get('tr:nth-child(5) input:nth-child(2)').click();
        cy.get('tr:nth-child(5) input:nth-child(3)').click();
        cy.get('tr:nth-child(5) input:nth-child(4)').click();
        cy.get('tr:nth-child(6) input:nth-child(4)').click();
        cy.get('tr:nth-child(7) select').type('ms3');
        cy.get('tr:nth-child(7) option:nth-child(3)').click();
        //cy.get('tr:nth-child(8) select').click();
        cy.get('tr:nth-child(8) select').select('dd4');
        //cy.get('tr:nth-child(8) select').click();
        cy.get('.styled-click-button:nth-child(2)').click();
        cy.get('#HTMLFormElements').submit();
        cy.url().should('contains', 'https://testpages.herokuapp.com/styled/the_form_processor.php');
        cy.get('#back_to_form').click();
        cy.url().should('contains', 'https://testpages.herokuapp.com/styled/basic-html-form-test.html');

     

    })

  
});