/// <reference types="cypress" />

describe('Add dress to Cart', () => {
    it('validate cart and payment', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.get('[href="\/login"]').should('include.text', 'Signup / Login')
        cy.get("[href='\/login']").click();

        cy.get("[action='\/login'] [type='email']").type("qat@mailinator.com");
        cy.get('[type="password"]').type(123456);
        cy.get("[action='\/login'] .btn-default").click();
        cy.wait(3000)


        //Select Fancy Green Top
        cy.get('[href="#Women"]').click();
        cy.get('[href="/category_products/2"]').click();
        cy.get('[href="/product_details/8"]').click();
        cy.get('.cart').click();
        cy.wait(2000);

        //Assertion that Fancy Green Top has been added to cart
        cy.get('.text-center').eq(0).should('include.text', 'been added to cart');

        //Go back 2 pages
        cy.go(-2);

        //Select Summer White Top
        cy.get('[href="/product_details/6"]').click();
        cy.get('.cart').click();
        cy.wait(2000);
        
        //View Cart
        cy.get('[href="/view_cart"]').eq(1).click();
        cy.get('.check_out').click();


        //Add comment
        cy.get('[name="message"]').type('Order placed.');
        cy.get('[href="/payment"]').click();
        cy.wait(2000);

        //Enter card details
        cy.get('[name="name_on_card"]').type('Test Card');
        cy.get('[name="card_number"]').type(410000000000);
        cy.get('.card-cvc').type(123);
        cy.get('.card-expiry-month').type('01')
        cy.get('.card-expiry-year').type(1900)
        cy.get('#submit').click();

        //Assertion for successful placement of Order
        cy.get('div > p').contains('Congratulations! Your order has been confirmed!').should('include.text', 'Congratulations!')

    })

})

