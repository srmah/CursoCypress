Given('Abrir el navegador principal',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When('Cargando el nombre {word}',(Name)=>{
    cy.get('#userName').should('be.visible').type(Name)
    cy.wait(500)
})

When('Cargando el email {word}',(email)=>{
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(500)
})

And('Cargando la Dirección {word}',(dir)=>{
    cy.get('#currentAddress').should('be.visible').type(dir)
    cy.wait(500)
})

And('Cargando la Dirección dos {word}',(dir2)=>{
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(500)
})

And('Click en Button',()=>{
    cy.get('#submit').should('be.visible').click({force: true})
    cy.wait(500)
})

Then('Validar el nombre de la Página',()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(1000)
})