// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('Sipvi', () => {

    before(function () {
        cy.fixture('datos').then(function (data) {
          globalThis.data = data;
        })
      })

    it('test_one', () => {
      
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.wait(1500)    
        cy.get('#firstName').should('be.visible').should('be.enabled').clear().type(data.name)
        cy.get('#lastName').should('be.visible').type(data.apellido)
    
        
    

    })


   

})