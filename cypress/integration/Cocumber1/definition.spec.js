Given('Abrir el navegador',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When('Cargando el campo nombre',()=>{
    cy.get('#userName').should('be.visible').type('Rodrigo')
    cy.wait(500)
})

When('Cargando el campo apellido',()=>{
    cy.get('#userEmail').should('be.visible').type('rodrigo@gmail.com')
    cy.wait(500)
})

And('Validar el titulo de la pagina',()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(1000)
})