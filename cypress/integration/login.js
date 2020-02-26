describe('Login', () => {
  it('should navigate to the login page', () => {
    cy
      .visit('http://localhost:5000')
      .findByText('Login Link')
      .click()
      .findByText('Hello Login!')
      .should('exist');
  });
});
