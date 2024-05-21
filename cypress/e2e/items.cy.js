/// <reference types="cypress" />



describe('Featured Items - Fetch and Sort by Price', () => {
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
        cy.wait(3000);

    //})
    //it("should fetch labels and prices of featured items and sort them by price (Low to High)", () => {
        let items = [];

       // cy.get('.features_items').scrollIntoView({force:true})
        cy.get(".features_items .productinfo")
          .each(($el) => {
            const priceText = $el.find("h2").text();
            const label = $el.find("p").text();
            const price = Number(priceText .replace(/[^0-9-]+/g, ""))
            items.push({ label, price });
          })
          .then(() => {
            items.sort((a, b) => a.price - b.price);
    
            cy.log("Sorted Items by Price (Low to High):");
            items.forEach((item) => {
              cy.log(`${item.label}: Rs.${item.price}`);
            });
          });
      });
})

    

  




       

        






 

