describe("appRedSocial", () => {
  it("passes", () => {
    cy.visit("https://frontend-redux-tau.vercel.app/");
    cy.contains("Home");
  });
});
