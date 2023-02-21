import employeeCreationPage from "../../pageobjects/employeeCreationPage"
import employeeListPage from "../../pageobjects/employeeListPage"
import dashboardPage from "../../pageobjects/dashboardPage"

describe('Employee Test', () => {
  const firstName = "First Name".concat(Cypress._.random(0, 1e4))
  const lastName = "Last Name".concat(Cypress._.random(0, 1e4))
  beforeEach(() => {
    cy.fixture("testdata").then((testdata) => {
      cy.login(testdata.username, testdata.password)
    })
  })

  it('Verify that Employee added successfully', () => {
    const employeeCreationObj = new employeeCreationPage();
    const employeeListObj = new employeeListPage();
    const dashboardObj = new dashboardPage();
    cy.visit('/')
    dashboardObj.clickPIMMenu();
    employeeListObj.clickAddButton();

    // Save Employee
    employeeCreationObj.enterFirstName(firstName)
    employeeCreationObj.enterLastName(lastName)
    employeeCreationObj.clickAddButton();

    // Goto Employee list and search
    employeeListObj.clickemployeeList();
    employeeListObj.searchEmployee(firstName)
    employeeListObj.getEmployeeRecord().should('be.visible').should('have.length', 1).contains(firstName)
  })

  it('Verify that Employee deleted successfully', () => {
    const dashboardObj = new dashboardPage();
    const employeeListObj = new employeeListPage();
    cy.visit('/')
    dashboardObj.clickPIMMenu();

    employeeListObj.searchEmployee(firstName)
    employeeListObj.deleteRecord();

    // Verify No record found
    employeeListObj.getMessage().should('be.visible').should('have.text', "No Records Found")
  })
})