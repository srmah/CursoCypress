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
            "Dir": "Demo de la Dirección",
            "Cursos":[
                {
                    "Nombre": "php",
                    "Descripcion": "Lenguaje de programación php"
                },
                {
                    "Nombre": "java",
                    "Descripcion": "Lenguaje de programación java"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "Lenguaje de programación python"
                },
                
                

            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[0])
        cy.log(datos.Cursos[2])
        cy.log(datos.Cursos[2].Descripcion)

       


    })
});