/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo de una Rest Api.", () =>{
    it("Demo uno", () =>{
        const ejemplo={
            "Nombre":"rodrigo",
            "Ap":"Villanueva",
            "Am": "nieto"
        }

        cy.log(ejemplo["Nombre"])
        cy.log(ejemplo["Ap"])
        cy.log(ejemplo["Am"])

    })
});