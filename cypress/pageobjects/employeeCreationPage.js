class employeeCreationPage{

    elements = { 
         firstNameInput : () => cy.get('[name=firstName]'),     
         lastNameInput : () => cy.get('[name=lastName]'),
         addBtn : () => cy.get('.oxd-button--secondary'),
     }

     enterFirstName(firstName)
     {
         this.elements.firstNameInput().type(firstName);
     }

     enterLastName(lastName)
     {
         this.elements.lastNameInput().type(lastName);
     }

     clickAddButton()
     {
         this.elements.addBtn().click();
     }
  }
  
  export default employeeCreationPage;