describe("Verify that home page is loaded", () => {
  it("Home page successfully loads", () => {
    cy.visit("https://actionurgentcare.com/");
    cy.contains("Services");
  });
});
