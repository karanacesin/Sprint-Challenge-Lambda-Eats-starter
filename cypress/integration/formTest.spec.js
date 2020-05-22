describe('Form Inputs', () => {

    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('Dawna')
        .should('have.value', 'Dawna')
    })


    it('can check multiple toppings', () => {
        cy.get('input[name="toppings"]')
        .checked('extra cheese, pineapple, bacon')
        .should('have.value', 'extra cheese, pineapple, bacon')
    })

    it('submit button not disabled any more', () => {
        cy.get('button.submit')
        .should('not.be.disabled')
      })


})

