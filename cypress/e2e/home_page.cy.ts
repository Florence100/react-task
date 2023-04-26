describe('The Home Page', () => {
    it('the h3 contains the correct text', () => {
      cy.visit('/user');
      cy.get("h3").eq(0).should("have.text", "Пожалуйста, заполните форму");
    })
})