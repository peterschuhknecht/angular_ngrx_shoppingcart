describe('App is running', () => {
  it('Visits the initial page', () => {
    cy.visit('/')
    cy.get('.wrapper').should('contains.text', 'Produkte')
  })

  it('Show up products', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.product').should('contains.text', 'Produkt Eins')
  })
})

describe('Test shopping cart function', () => {
  it('Add product to shopping cart', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('#product-1').click()
    cy.get('#cart-button').click()
    cy.get('.product').should('contains.text', 'Produkt Zwei')
  })
})
