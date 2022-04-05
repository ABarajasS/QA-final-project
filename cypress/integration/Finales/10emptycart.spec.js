describe ("ModCloth Empty Cart", () => {      
    it("Going to Modcloth", () => {
      cy.visit('https://modcloth.com')
      cy.get('.glClose')
        .click()   
    })
  
    it("#1 Going through search bar", () => {
      cy.get('.search-menu-item')
        .click()
      cy.get('#nogin-search-app > div > form > input')
        .type("Gift Card")
      cy.get('section > ul')
        .contains('Modcloth Gift Card')
        .click()
    })
  
    it.skip(" #2 Going through footer", () => {
      cy.wait(2000)
      cy.get('.nav-link-gift-cards > .nav-link')
        .click()
    })
  
    it("#9Checking out with empty shopping bag", () => {
      cy.wait(4000)  
      cy.get('.changeShipping')
        .click()
      cy.get('select[id="gle_selectedCountry"]')
        .select('US')
      cy.get('.glSaveBtn')
        .click()
      cy.url()
        .should('contain', '/products/modcloth-gift-card')
      cy.wait(8000)
      cy.get('#icon_bag')
        .click()
      cy.get('.cart-footer > .py-3')
        .click()
      cy.url()
        .should('contain', '/cart')      
    })
})
