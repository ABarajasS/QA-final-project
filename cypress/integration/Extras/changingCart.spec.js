describe ("ModCloth", () => {      
//This TC starts in the gift card page
      it.only("#5 Adding several gift cards to cart", () => {
        cy.visit('http://modcloth.com/products/modcloth-gift-card')
        cy.get('.changeShipping')
          .click()
        cy.get('select[id="gle_selectedCountry"]')
          .select('US')
        cy.get('.glSaveBtn')
          .click()
        cy.wait(4000)
        cy.get('.grid > :nth-child(4) > div > span')//2 de $100
          .click()
        cy.get('select[class="text-input"]')
          .select('2')
        cy.get('.mb-4 > .btn')
          .click()
        cy.wait(4000)
        // cy.get('.flex > .cursor-pointer')
        //   .click()    
        // cy.get('.grid > :nth-child(3) > div > span')//3 de $50
        //   .click()
        // cy.get('select[class="text-input"]')
        //   .select('3')
        // cy.get('.mb-4 > .btn')
        //   .click()
        // cy.wait(4000)
        // cy.get('.flex > .cursor-pointer')
        //   .click()
        // cy.get('.grid > :nth-child(2) > div > span') //5 de $25
        //   .click()
        // cy.get('select[class="text-input"]')
        //   .select('5')
        // cy.get('.mb-4 > .btn')
        //   .click()
        // cy.wait(4000)
        // cy.get('.flex > .cursor-pointer')
        //   .click()
        // cy.get('.grid > :nth-child(1) > div > span') //10 de $10
        //   .click()
        // cy.get('select[class="text-input"]')
        //   .select('10')
        // cy.get('.mb-4 > .btn')
        //   .click()
        // cy.wait(4000)
        cy.get('.cc-allow')
          .click()
        // cy.wait(2000)
        // cy.contains('Your Shopping Bag')
        //   .should('exist') 
        cy.get('.cart-footer > .btn-secondary')
          .click() //ir a /cart
        cy.url()
          .should('contain', '/cart')

        cy.get('.ml-auto > .cart-count-badge > .amount')
          .contains('20')
        cy.contains('20 items')
          .should('exist') 
        cy.wait(5000)
        cy.get(':nth-child(4) > .cart-item > .flex-1 > .flex-row.w-full > :nth-child(3)')
          .click() //adding one item in the first item added (100) 3pieces
          cy.wait(3000)
        cy.get(':nth-child(3) > .cart-item > .flex-1 > .flex-row.w-full > :nth-child(1)')
          .click() //removing one item in the second item added (50) 2 pieces
        cy.get(':nth-child(1) > .cart-item > .flex-1 > :nth-child(9) > .mt-2')
          .click() // removing the last item added (10) 0pieces
        cy.wait(3000)
        cy.contains('10 items')
          .should('exist') 
          cy.wait(3000)
        // cy.get('.cart-footer > .py-3')//Going to checkout
        //   .click()
      })
      })