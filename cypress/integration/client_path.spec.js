/// <reference types="Cypress" />

describe("client path", () => {
  it("should work", () => {
    cy.visit("http://localhost:8000")
    cy.contains("I need some help with software").click()
    cy.contains("Services")
    cy.contains("Requirements")
    cy.contains("Application")
    cy.contains("Approved")
    cy.contains("Meetings")
    cy.contains("Execution of Service")
    cy.contains("Handover")
  })
})
