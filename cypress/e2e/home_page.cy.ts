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

describe('The Modal Window', () => {
  it('When you click on the card, a modal window opens', () => {
    cy.visit('/');

    cy.get("[data-test='foto-card']").eq(0).click()
    cy.get(".modal").should('be.visible');
  })

  // it('When you click on the cross, a modal window close', () => {
  //   cy.visit('/');

  //   cy.get("[data-test='foto-card']").eq(0).click()
  //   cy.get(".modal-close").click();
  //   cy.get(".modal").should('not.exist');
  // })
})

describe('About Page', () => {
  it('The h3 contains the correct text', () => {
    cy.visit('/about');

    cy.get("h3").eq(0).should("have.text", "Здесь будет страничка о нас");
  })
})

// describe('User Survey Form', () => {
//   beforeEach(() => {
//     cy.visit('/user');
//   })

//   it('Empty form not submitting', () => {
//     cy.get("[data-test='form-submit']").click()
//     cy.get(".message-err").eq(0).should("have.text", "Пожалуйста, убедитесь, что поле заполнено");
//   })
// })

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