describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
// describe("My Second Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });
describe("My Third Test", () => {
  it('finds the content "Login"', () => {
    cy.visit("https://mybodymyhealth.herokuapp.com/");
    cy.contains("Login").click();
    cy.url().should("include", "/login");

    // cy.get(".email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");
  });
});
