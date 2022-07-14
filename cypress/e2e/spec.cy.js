describe('empty spec', () => {
  
  it('passes', () => {
    cy.visit('http://localhost:8080');
    cy.contains('vue');
  })
  it('passes', () => {
    cy.contains('vue');
  })
})