describe("Services Page Navigation", () => {
  it("navigates to Services page", () => {
    cy.visit("https://actionurgentcare.com/");
    cy.contains("Virtual Visit").click();
    cy.url().should("include", "/virtual-visit");
    cy.contains("Book Appointment");
  });
});
