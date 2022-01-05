describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1536, 722)
    
       cy.visit('https://demoqa.com/text-box')
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click()
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('rodrigo')
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('dorigo@gmail.com')
    
       cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click()
    
       cy.get('.accordion > .element-group > .show > .menu-list > #item-0').click()
    
       cy.get('.element-group > .show > .menu-list > #item-1 > .text').click()
    
       cy.get('.rct-node > .rct-text > label > .rct-checkbox > .rct-icon').click()
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('ol > .rct-node > .rct-text > .rct-collapse > .rct-icon').click()
    
       cy.get('.element-group > .show > .menu-list > #item-2 > .text').click()
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
    
       cy.get('.row > .col-12 > div > .custom-control:nth-child(3) > .custom-control-label').click()
    
       cy.get('.row > .col-12 > div > .custom-control > #impressiveRadio').type('on')
    
    })
   
   })
   