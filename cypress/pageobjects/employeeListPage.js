class employeeListPage{

    elements = { 
        employeeListMenu : () => cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)'),
        employeeNameInput : () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        addBtn : () => cy.get('.orangehrm-paper-container button'),
        searchBtn : () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        checkAllBtn : ()=> cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'),
        deleteBtn : ()=> cy.get('.orangehrm-horizontal-padding > div > .oxd-button'),
        confirmBtn : ()=> cy.get('.orangehrm-modal-footer > .oxd-button--label-danger'),
        employeeRecord : () => cy.get('.oxd-table-card > .oxd-table-row'),
        noRecordLocator: ()=> cy.get('.orangehrm-horizontal-padding > .oxd-text')
     }
     
     clickemployeeList()
     {
         this.elements.employeeListMenu().click();
     }
     
     clickAddButton()
     {
         this.elements.addBtn().click();
     }
     
     searchEmployee(firstName) {
        this.elements.employeeNameInput().type(firstName);
        this.elements.searchBtn().click({ force: true })
      }

      deleteRecord() {
        this.elements.employeeRecord().should('be.visible')
        this.elements.checkAllBtn().click();
        this.elements.deleteBtn().click();
        this.elements.confirmBtn().click();
      }
      
      get getEmployeeRecord()
      {
          return this.elements.employeeRecord;
      }

      get getMessage()
      {
          return this.elements.noRecordLocator;
      }
  }
  
  export default employeeListPage;