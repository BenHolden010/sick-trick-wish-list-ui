describe('should display tricks on page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "sampleTricks"
    })
    .intercept("POST", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      body: '{stance: regular, name: backflip, obstacle: "flat ground", tutorial: youtube.backflip, id:4}'
    })
  });

  it("should enter a trick", () => {
    cy.get('.name').type('backflip')
    .get('.tutorial').type('youtube.backflip')
    .get('.add-trick-button').click()
  });
})