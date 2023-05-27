describe('Find and fill the form', () => {
  
  const FormsData = (email, password, radios) => 
  function () {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('#inputEmail1').type(`${email}`)
    cy.get('#inputPassword2').type(`${password}`)

      if(radios == 1) {
        cy.get('input[type=radio]').first().check({force: true});
      } else if (radios == 2){
        cy.get('input[type=radio]').eq(1).check({force: true});
      } else {
        cy.log('Haven`t selected anything')
      }
  }
  

  it('test 3', FormsData('andrii.yakovenko@gmail.com', 'iampassword49', 1))
  it('test2', FormsData('olya.yakovenko@gmail.com', 'iampassword', 2))
  it('test3', FormsData('olya.yakovenko@gmail.com', 'iampassword', 39))

})