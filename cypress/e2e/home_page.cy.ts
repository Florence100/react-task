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

    cy.get("[data-test='foto-card']").eq(0).click();
    cy.get(".modal").should('be.visible');
  })

  it('When you click on the cross, a modal window close', () => {
    cy.visit('/');

    cy.get("[data-test='foto-card']").eq(0).click();
    cy.get(".modal-close").click();
    cy.get(".modal").should('not.exist');
  })

  it('Modal window contains correct information', () => {
    cy.visit('/');

    cy.get("[data-test='foto-card']").eq(0).click();
    cy.get("img").should('be.visible');
    cy.get(".modal-info").should('be.visible');
  })
})

describe('The Search', () => {
  it('The value entered in the search is saved', () => {
    cy.visit('/');

    cy.get("[data-test='search']").click().type('cat');
    cy.contains('О нас').click();
    cy.contains('Главная').click();
    cy.get("[data-test='search']").should("have.value", "cat");
  })
})

describe('About Page', () => {
  it('The h3 contains the correct text', () => {
    cy.visit('/about');

    cy.get("h3").eq(0).should("have.text", "Здесь будет страничка о нас");
  })
})

describe('404 Page', ()=> {
  it('When entering an invalid link, a 404 page opens', () => {
    cy.visit('/react');

    cy.get("h3").should("have.text", "Здесь будет страница 404");
  })
})

describe('User Survey Form', () => {
  beforeEach(() => {
    cy.visit('/user');
  })

  it('Empty form not submitting', () => {
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