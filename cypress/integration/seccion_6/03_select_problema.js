/// <reference types="Cypress"/>
describe("Select problema ",()=>{

    it ("Test validar el título de la página",()=>{
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should("eq","ToolsQA")
        cy.log("OK la funcion title es correcta")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#withOptGroup > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
        cy.get('#react-select-2-option-1-1').click();
        /* ==== End Cypress Studio ==== */
    })
   

     it.only('what_it_does', function() {
       
           cy.viewport(1366, 625)
        
           cy.visit('https://demo.seleniumeasy.com/bootstrap-dual-list-box-demo.html')
        
           cy.get('.row > .list-left > .well > .list-group > .list-group-item:nth-child(1)').click()
        
           cy.get('.row > .col-md-6 > .row > .list-arrows > .move-right').click()
        
           cy.get('.row > .list-right > .well > .list-group > .list-group-item:nth-child(3)').click()
        
           cy.get('.col-md-6 > .row > .list-arrows > .btn:nth-child(1) > .glyphicon').click()
        
           cy.get('.row > .list-left > .well > .list-group > .list-group-item:nth-child(1)').click()
        
           cy.get('.row > .col-md-6 > .row > .list-arrows > .move-right').click()
        
           cy.get('.row > .dual-list > .well > .list-group > .list-group-item:nth-child(6)').click()
        
           cy.get('.row > .dual-list > .well > .list-group > .list-group-item:nth-child(7)').click()
        
           cy.get('.row > .col-md-6 > .row > .list-arrows > .move-left').click()
        
        })     

})// Cierre de describe