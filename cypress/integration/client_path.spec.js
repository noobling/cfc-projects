/// <reference types="Cypress" />

describe("client path", () => {
  cy.visit("http://localhost")
  cy.contains("I need some help with software").click()
  cy.contains("Services")
  cy.contains("Requirements")
  cy.contains("Application")
  cy.contains("Approved")
  cy.contains("Meetings")
  cy.contains("Execution of Service")
  cy.contains("Handover")
})
