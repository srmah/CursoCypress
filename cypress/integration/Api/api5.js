/// <reference types="Cypress" />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Demo de una Rest Api Get desde Cypress - 5.", () =>{

    let res;

    it("Test uno Metodo Get", () =>{

        res=cy.request("http://localhost:3000/posts")
        .should((response) => {
            expect(response.status).to.eq(200)
        })
        res.its("status").should("equal",200)
       


    })
});