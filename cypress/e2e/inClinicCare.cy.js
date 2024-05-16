describe("Verify that date & time and reason of appointment for chosen clinic is available and clickable", () => {
  it("navigates directly to the clinic page, clicks on available time, selects the Reason for Appointment", () => {
    cy.viewport(1280, 720);
    cy.visit("https://actionurgentcare.com/");
    cy.contains("In-Clinic Care").trigger("mouseover");
    cy.contains("Milpitas").should("be.visible").click();
    cy.url().should("include", "/clinics/milpitas");
    cy.contains("10:15").click();
    cy.get(".MuiButton-root").contains("Select").click();
    cy.contains("Anti-Aging Program").click();
    cy.contains("Continue").click();
  });
});
