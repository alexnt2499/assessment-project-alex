describe("LoginFlow", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("login_flow_login_successful", () => {
    cy.get("[name='username']").type("dung+octopus4@101digital.io");

    cy.get("[name='password']").type("Abc@123456");

    cy.get('[data-cy="submit"]').click();

    cy.location("pathname").should("eq", "/dashboard");
  });
});

describe("CreateInvoiceFlow", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("click_create_new_invoice", () => {
    const invoiceNumber = `IVN${Math.floor(10000 + Math.random() * 90000)}`;

    cy.get("[name='username']").type("dung+octopus4@101digital.io");
    cy.get("[name='password']").type("Abc@123456");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="create_invoice"]').click();
    cy.get("[data-cy=title]").should("have.text", "Create New Invoice");

    cy.get("[name='invoiceReference']").type("New invoice reference");
    cy.get("[name='invoiceNumber']").type(invoiceNumber);
    cy.get("[name='invoiceDate']").type("2023-09-12");
    cy.get("[name='dueDate']").type("2023-02-10");

    cy.get("[data-cy='addItem']").click();
    cy.get("[data-cy='item1']").should("have.text", "Item 1");
    cy.get("[data-cy='itemReference1']").type("Hello testing itemReference");
    cy.get("[data-cy='description1']").type("Hello testing description");
    cy.get("[data-cy='quantity1']").type(100);
    cy.get("[data-cy='rate1']").type(1000);
    cy.get("[data-cy='itemName1']").type("Honda CBR150RR");
    cy.get("[data-cy='itemUOM1']").type("UOM");

    cy.get("[data-cy='addItem']").click();
    cy.get("[data-cy='item2']").should("have.text", "Item 2");
    cy.get("[data-cy='itemReference2']").type("Hello testing itemReference 2");
    cy.get("[data-cy='description2']").type("Hello testing description 2");
    cy.get("[data-cy='quantity2']").type(100);
    cy.get("[data-cy='rate2']").type(1000);
    cy.get("[data-cy='itemName2']").type("Yamaha R1M");
    cy.get("[data-cy='itemUOM2']").type("UOM");

    cy.get("[name='description']").type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    );

    cy.get("[data-cy='submitCreateInvoice']").click();
  });
});
