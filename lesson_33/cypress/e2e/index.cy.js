/// <reference types="cypress" />

describe('Check todos', () => {
  it('Page title must be TODO', () => {
    cy.visit('http://127.0.0.1:5500/lesson_33/client/index.html');
    cy.title().should('include', 'TODO');
  });

  it('Text input must get number and words', () => {
    cy.visit('http://127.0.0.1:5500/lesson_33/client/index.html');
    cy.get('.js--form__input').type('Test words').type(123)
  });

  it('When submit form input must be with value', () => {
    cy.visit('http://127.0.0.1:5500/lesson_33/client/index.html');
    cy.get('.js--form__input').should('be.empty')
    cy.get('.js--form').submit()
    cy.get('.js--form__input').should('have.class', 'error')
  });


  it("Should add a new item to the list with the correct text after entering input and clicking 'Add'", () => {
    cy.visit('http://127.0.0.1:5500/lesson_33/client/index.html');
    cy.get('.js--form__input').type('check submit 123')
    cy.get('.js--form').submit()
    cy.get('.js--todos-wrapper').should('contain.text', 'check submit 123')
  });

  it("Todo should remove from the list when click 'Remove' button", () => {
    cy.visit('http://127.0.0.1:5500/lesson_33/client/index.html');
    cy.get('.js--form__input').type('Remove element')
    cy.get('.js--form').submit()
    cy.get('li').contains('Remove element').parent('li').find('button.todo-item__delete').click()
    cy.get('li').contains('Remove element').should('not.exist')
  });
});