class ProyectoUno_Po{
  

    visitHome(){
        let tiempo=1000  
        //Cypress.config -> commandos de configuración de cypress
        //Cypress.config("defaultCommandTimeout",15000)      
        before(()=>{    
          cy.visit('https://demo.seleniumeasy.com/input-form-demo.html'),
          cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
          cy.wait(tiempo)
        })
    }

    SeccionUno(name,last_name,email,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.screenshot("Campo nombre")
        cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(last_name)
        cy.wait(tiempo)
        cy.screenshot("Campo Last_name")
        cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    SeccionDos(tel,dir1,ciudad,estado,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(tel)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(dir1)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(ciudad)
        cy.wait(tiempo)
        cy.xpath("//select[contains(@name,'state')]").select(estado, { force: true })
        cy.wait(tiempo)
    }

    SeccionTres(cp,web,proyecto,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(cp)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@value,'yes')]").check().should('be.checked')
        cy.wait(tiempo)
        cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(proyecto)
        cy.wait(tiempo)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force: true})
        cy.wait(tiempo) 
    }

}//final

export default ProyectoUno_Po;