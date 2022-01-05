/// <reference types="Cypress"/>
require ('cypress-plugin-tab')
require ('cypress-xpath')
describe("Tipos de selectores",()=>{

    it ("Selector por ID",()=>{
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)


        //Selector por ID
        cy.get('#userName').should("be.visible").type("Isma")
        cy.get('#userEmail').should("be.visible").type("irubio@gmail.com")
    })
  
    it ("Selector por Atributos",()=>{
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)


        //Selector por Atributos
        cy.get('[placeholder="Full Name"]').should("be.visible").type("Isma")
        
    })

    it ("Selector por XPath",()=>{
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)


        //Selector por XPath
        cy.xpath('//*[@id="userName"]').should("be.visible").type("Isma")
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("Isma")
    })

    it ("Selector por Contains",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)


        //Selector por Contains
        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Other").click()

    })
    it ("Selector por CopySelector",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        //Selector por CopySelector
        cy.get("#userNumber").should("be.visible").type("669203098")
        

    })
})// Cierre de describe