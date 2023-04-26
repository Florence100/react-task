/// <reference types="Cypress" />
describe('The Form Page', () => {
    it('the h3 contains the correct text', () => {
      cy.visit('/user');
      cy.get("h3").eq(0).should("have.text", "Пожалуйста, заполните форму");
      cy.get("h3").eq(1).should("have.text", "У вас пока еще нет карточек");
    })
    it('Just a test to remove page load on coverage saving', () => {
      expect(true).to.equal(true);
    })
})