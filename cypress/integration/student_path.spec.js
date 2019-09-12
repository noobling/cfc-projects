/// <reference types="Cypress" />

describe("student path", () => {
  it("should work", () => {
    cy.visit("http://localhost:8000")
    cy.contains("I'm thinking of working on a project").click()
    cy.contains("Application")
    cy.contains("Interview")
    cy.contains("Learn")
    cy.contains("Build")
    cy.contains("Handover")
  })
})
