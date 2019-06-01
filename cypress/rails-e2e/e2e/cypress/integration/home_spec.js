/// <reference types="cypress" />

describe('Create a post', () => {
  function createPostWith({ creator, content }) {
    cy.visit('/posts')

    cy.contains('Create post').click()

    cy.url().should('include', '/posts/new')

    cy.get('#post_creator').type(creator)
    cy.get('#post_content').type(content)

    cy.get('button')
      .contains('Create')
      .click()
  }

  context('When information is valid', () => {
    it('Create post successfully', () => {
      createPostWith({
        creator: 'MoonLight',
        content: 'Hello everyone.',
      })

      cy.url().should('match', /posts\/\d+/)

      cy.get('.creator').contains('MoonLight')
      cy.get('.content').contains('Hello everyone.')
    })
  })

  context('When information is invalid', () => {
    context('When creator is empty', () => {
      it('Show creator required error message', () => {
        createPostWith({
          creator: '',
          content: 'Hello everyone.',
        })

        cy.url().should('match', /posts$/)

        cy.contains('Creator is required')
      })
    })

    context('When content is empty', () => {
      it('Show content required error message', () => {
        createPostWith({
          creator: 'MoonLight',
          content: '',
        })

        cy.url().should('match', /posts$/)

        cy.contains('Content is required')
      })
    })
  })
})
