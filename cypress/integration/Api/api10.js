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


    it("Test Api Get 3", () =>{
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response =>{
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[0]).has.property("title","Cypress ");
            expect(body[0]).has.property("author","Rodrigo");
           
        })

    })


    // it.only("api metodo POST",()=>{
    //     cy.request({
    //         method: "POST",
    //         url: "http://localhost:3000/posts",
    //         body:{
    //             "id": 4,
    //             "title": "Insertando un valor en cypress Api",
    //             "author": "Juan Perez"
    //         }
    //     }).then(response =>{
    //        expect(response.status).to.eql(201)

    //     })

    // })


    
    // it.only("Api metodo PUT modificando un Valor",() =>{
    //     cy.request({
    //         method: "PUT",
    //         url: "http://localhost:3000/posts/1",
    //         body:{
    //             "title": "Modificando el valor Api",
    //             "author": "Rodrigo Villanueva"
    //         },
    //     }).then(response =>{
    //        expect(response.status).to.eql(200)

    //     })

    // })


    it.only("Delete  un campo desde la Api",() =>{
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/20"
            
            }).then(response =>{
            expect(response.status).to.eql(200)

            })
        

    })

    
   

   
    

    it("API POST INSERTAR POR CICLO",()=>{
        for(let x=1; x<=3; x++){  
            let tx=Math.random().toString(5)      
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                
                body:{
                    "id": 24+x,
                    "title": "Título #"+tx,
                    "author": "Autor #"+tx
                }
            
            }).then(response =>{
                expect(response.status).to.eql(201)
            
            })
        }

    })



});