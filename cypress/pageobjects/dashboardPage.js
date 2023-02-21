class dashboardPage{

    elements = { 
        pimMenu : () => cy.get('ul.oxd-main-menu li:nth-child(2)'),
     }

     clickPIMMenu()
     {
         this.elements.pimMenu().click();
     }

  }
  
  export default dashboardPage;