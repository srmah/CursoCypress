/// <reference types="Cypress" />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo de una Rest Api.", () =>{
    it("Test uno", () =>{

        const datos={
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "7868768",
            "Dir": "Demo de la Dirección"
        }

        cy.log(datos["Nombre"])
        cy.log(datos["Ap"])
        cy.log(datos["Am"])
        cy.log(datos["Tel"])
        cy.log(datos["Dir"])


    })
});