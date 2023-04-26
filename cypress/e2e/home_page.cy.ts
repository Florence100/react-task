/// <reference types="Cypress" />
describe('The Main Page', () => {
    it('Links are correct', () => {
      cy.visit('/');

      cy.contains('О нас').click();
      cy.url().should('include', '/about')

      cy.contains('Форма').click();
      cy.url().should('include', '/user')

      cy.contains('Главная').click();
      cy.url().should('include', '/')
    })
})

describe('About Page', () => {
  it('The h3 contains the correct text', () => {
    cy.visit('/about');

    cy.get("h3").eq(0).should("have.text", "Здесь будет страничка о нас");
  })
})

describe('User Survey Form', () => {
  beforeEach(() => {
    cy.visit('/user');
  })

  it('Empty form not submitting', () => {
    // cy.get("[data-test='input-name']").type("Nastya")
    cy.get("[data-test='form-submit']").click()
    cy.get(".message-err").eq(0).should("have.text", "Пожалуйста, убедитесь, что поле заполнено");
  })
    
})

describe('The Form Page', () => {
  it('The h3 contains the correct text', () => {
    cy.visit('/user');

    cy.get("h3").eq(0).should("have.text", "Пожалуйста, заполните форму");
    cy.get("h3").eq(1).should("have.text", "У вас пока еще нет карточек");
  })
  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  })
})