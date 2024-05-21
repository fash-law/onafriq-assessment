/// <reference types="cypress" />

describe('Login functionality', () => {
    afterEach('indicate test completion', () =>{
        cy.log('Test is completed')
    })
    it('validate for valid login credentials', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.get('[href="\/login"]').should('include.text', 'Signup / Login')
        cy.get("[href='\/login']").click();
        
        cy.get("[action='\/login'] [type='email']").type("qat@mailinator.com");
        cy.get('[type="password"]').type(123456);
        cy.get("[action='\/login'] .btn-default").click();
        cy.wait(2000);
 

    })

    it('validate for invalid login credentials', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.get("[href='\/login']").click();
        cy.get("[action='\/login'] [type='email']").type("qat@mailinator");
        cy.get('[type="password"]').type(123456);
        cy.get("[action='\/login'] .btn-default").click()
        cy.get("[action] p").should('have.text', 'Your email or password is incorrect!')
        


    })
   
})

        