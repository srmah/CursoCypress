/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto cypres Por medio de Comandos Personalizados', () =>{ 
  let tiempo=100
  before(()=>{    
    cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
    cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    cy.wait(tiempo)
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

  it.only('Prueba invalida por nombre', () =>{
    cy.Bloque_Reto_Form("R","Perez","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters","Nombre")
  })

  it.only('Prueba validar email', () =>{
    cy.Bloque_Reto_Form("Carlos","Perez","carlos.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address","Emails")
   
  })


  it('Prueba invalida por Apellido', () =>{
    cy.Bloque_Reto_Form("Carlos","****","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
  })

  it('Prueba Ok', () =>{
    cy.Bloque_Reto_Form("Carlos","Perez","carlos@gmail.com","5548748965","dirección uno","México","Alabama","07989","demo.com","Proyecto demo uno",tiempo)
  })
});