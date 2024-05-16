describe("Verifies Nav links", () => {
  it("verifies links", () => {
    cy.viewport(1280, 720);
    cy.visit("https://actionurgentcare.com/");

    cy.contains("In-Clinic Care").click();
    cy.url().should("include", "/in-clinic-care");
    cy.contains("Select Appointment Time").should("be.visible");

    cy.go("back");

    cy.contains("Virtual Visit").click();
    cy.url().should("include", "/virtual-visit");
    cy.contains("Select Appointment Time").click();

    cy.go("back");

    cy.contains("Pay My Bill").should("be.visible").click();
  });
});
