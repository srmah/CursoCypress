/// <reference types="Cypress" />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1536, 722)
    
       cy.visit('https://demoqa.com/')
    
       cy.get('body > #app > header > a > img').click()
    
       cy.visit('https://demoqa.com/')
    
       cy.get('.home-body > .category-cards > .card:nth-child(1) > div > .card-up').click()
    
       cy.get('.element-group > .show > .menu-list > #item-0 > .text').click()
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click()
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('rodrigo')
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('rodrigo@gmail.com')
    
       cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click()
    
       cy.get('.accordion > .element-group > .show > .menu-list > #item-0').click()
    
       cy.get('.element-group > .show > .menu-list > #item-1 > .text').click()
    
       cy.get('.rct-node > .rct-text > label > .rct-checkbox > .rct-icon').click()
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('ol > .rct-node > .rct-text > .rct-collapse > .rct-icon').click()
    
       cy.get('.accordion > .element-group > .show > .menu-list > #item-2').click()
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(3) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #impressiveRadio').type('on')
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.element-group > .show > .menu-list > #item-3 > .text').click()
    
       cy.get('.col-12 > .web-tables-wrapper > .mt-2 > .col-md-7 > #addNewRecordButton').click()
    
       cy.get('.modal-body > #userForm > #firstName-wrapper > .col-md-6 > #firstName').click()
    
       cy.get('.modal-body > #userForm > #firstName-wrapper > .col-md-6 > #firstName').type('nuevo')
    
       cy.get('.modal-body > #userForm > #firstName-wrapper > .col-md-6 > #firstName').type('Juan')
    
       cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').type('Perez')
    
       cy.get('.modal-body > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('perez@gmail.com')
    
       cy.get('.modal-body > #userForm > #age-wrapper > .col-md-2 > #age').type('34')
    
       cy.get('.modal-body > #userForm > #salary-wrapper > .col-md-9 > #salary').type('12000')
    
       cy.get('.modal-body > #userForm > #department-wrapper > .col-md-6 > #department').type('Test Qa')
    
       cy.get('.modal-body > #userForm > .mt-4 > .text-right > #submit').click()
    
    })

    it('Demo dos', function() {

        cy.viewport(1536, 722)
     
        cy.visit('https://demoqa.com/webtables')
     
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').click()
     
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').type('perez')
     
        cy.get('.rt-td > .action-buttons > #edit-record-4 > svg > path').click()
     
        cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').click()
     
        cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').type('Perez chavez')
     
        cy.get('.modal-body > #userForm > #age-wrapper > .col-md-2 > #age').type('65')
     
        cy.get('.modal-body > #userForm > .mt-4 > .text-right > #submit').click()
     
     })


     it.only('test tres', function() {

        cy.viewport(1536, 722)
     
        cy.visit('https://demoqa.com/webtables')
     
        cy.get('body > #app > .body-height > .container > .row').click()
     
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').click()
     
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').type('ci')
     
        cy.get('.rt-tr > .rt-td > .action-buttons > #edit-record-1 > svg').click()
     
        cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').click()
     
        cy.get('.modal-body > #userForm > #lastName-wrapper > .col-md-6 > #lastName').type('Vega dos')
     
        cy.get('.modal-body > #userForm > #age-wrapper > .col-md-2 > #age').type('45')
     
        cy.get('.modal-body > #userForm > #department-wrapper > .col-md-6 > #department').click()
     
        cy.get('.modal-body > #userForm > #department-wrapper > .col-md-6 > #department').type('test_qa')
     
        cy.get('.modal-body > #userForm > .mt-4 > .text-right > #submit').click()

        //Nuevas lineas
        cy.wait(6000)
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').click()
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').click()

        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').clear()
        cy.wait(600)     
     
        cy.get('.web-tables-wrapper > .mt-2 > .col > .mb-3 > #searchBox').type('Al')
     
        cy.get('#delete-record-2').click()
     
     })
    


    
    
   
 })
   