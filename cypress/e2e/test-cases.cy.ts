const TEST_CASES = {
  "<Form /> component + <Link /> component":
    "form-component-plus-link-component",
  "<form /> element + <Link /> component": "form-element-plus-link-component",
  "<Form /> component + <a /> element": "form-component-plus-a-element",
  "<form /> element + <a /> element": "form-element-plus-a-element",
};

Object.entries(TEST_CASES).forEach(([name, slug]) => {
  describe(`The ${name} test case`, () => {
    it("should work", () => {
      cy.visit(`/${slug}`);

      cy.get("#renderedSearchQuery").should("have.text", "(empty)");
      cy.get("#searchField").should("have.value", "");
      cy.location("search").should("eq", "");

      cy.contains("a", "Change search query").click();
      cy.get("#renderedSearchQuery").should("have.text", "changed");
      cy.get("#searchField").should("have.value", "changed");
      cy.location("search").should("eq", "?search=changed");

      cy.contains("a", "Empty search query").click();
      cy.get("#renderedSearchQuery").should("have.text", "(empty)");
      cy.get("#searchField").should("have.value", "");
      cy.location("search").should("eq", "?search=");

      cy.get("#searchField").type("something");
      cy.contains("button", "Submit").click();
      cy.get("#renderedSearchQuery").should("have.text", "something");
      cy.get("#searchField").should("have.value", "something");
      cy.location("search").should("eq", "?search=something");

      cy.contains("a", "Change search query").click();
      cy.get("#renderedSearchQuery").should("have.text", "changed");
      cy.get("#searchField").should("have.value", "changed");
      cy.location("search").should("eq", "?search=changed");

      cy.contains("a", "Empty search query").click();
      cy.get("#renderedSearchQuery").should("have.text", "(empty)");
      cy.get("#searchField").should("have.value", "");
      cy.location("search").should("eq", "?search=");
    });
  });
});
