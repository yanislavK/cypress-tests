describe("Verify that date and reason of appointment is available and clickable", () => {
  it("navigates to Virtual Visit page, clicks on available time, selects the Reason for Appointment", () => {
    cy.viewport(1280, 720);
    cy.visit("https://actionurgentcare.com/");
    cy.contains("Virtual Visit").click();
    cy.url().should("include", "/virtual-visit");
    cy.contains("10:15").click();

    cy.get(".MuiButton-root").contains("Select").click();

    cy.contains("Anti-Aging Program").click();
    cy.contains("Continue").click();
  });
});
