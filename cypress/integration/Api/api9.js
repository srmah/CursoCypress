/// <reference types="Cypress" />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Api consulta GET.", () =>{
    let datos;

    it("Test Api Get", () =>{
        datos=cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal",200)

    })

    it("Test Api Get 2", () =>{
        datos=cy.request("http://localhost:3000/posts")
        .should((response)=> {
            expect(response.status).to.eq(200)
        })

    })

    it("API POST INSERTAR",()=>{
        for(let x=1; x<=3; x++){  
            let tx=Math.random().toString(5)      
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                
                body:{
                    "id": 5+x,
                    "title": "Demo titulo #"+tx,
                    "author": "Demo autor #"+tx
                }
            
            }).then(response =>{
                expect(response.status).to.eql(201)
            


            })
        }

    })


   
});