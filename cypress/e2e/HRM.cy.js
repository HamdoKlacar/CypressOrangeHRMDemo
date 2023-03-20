describe("OrangeHRM", () => {
  
  beforeEach("Visit OrangeHRM", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should("eq", "OrangeHRM")
      

  })

  it("ORANGEHRMD-1 - Login with correct references", () => {
     
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
     cy.get('.oxd-button').click()
     cy.url().should("include", "opensource-demo")
     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible")
     

  })

  it("ORANGEHRMD-2 - Login with multiple references", () => {

   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin1")
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin12")
   cy.get('.oxd-button').click()
   cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin12")
   cy.get('.oxd-button').click()
   cy.get('.oxd-alert-content > .oxd-text').should("be.visible")
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin1")
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
   cy.get('.oxd-button').click()
   cy.get('.oxd-alert-content > .oxd-text').should("be.visible")

  
 })

 it("ORANGEHRMD-3 - Login with empty fields", () => {

  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.title().should("eq", "OrangeHRM")
  cy.get('.oxd-button').click()
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should("be.visible")
  cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should("be.visible")

})

it("ORANGEHRMD-4 - Login with just Username", () => {

  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
  cy.get('.oxd-button').click()
  cy.get('.oxd-input-group > .oxd-text').should("be.visible")


})

it("ORANGEHRMD-5 - Login with just Password", () => {

  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
  cy.get('.oxd-button').click()
  cy.get('.oxd-input-group > .oxd-text').should("be.visible")


})


})
