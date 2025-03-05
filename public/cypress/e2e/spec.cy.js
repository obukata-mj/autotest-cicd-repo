describe("ログインページのテスト", () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000/login.html"); // ローカルサーバのURLに変更
  });

  it("正しい情報でログイン成功", () => {
      cy.get("#email").type("test@example.com");
      cy.get("#password").type("password123");
      cy.get("button").click();
      cy.get("#login-message").should("have.text", "ログイン成功");
  });

  it("間違った情報でログイン失敗", () => {
      cy.get("#email").type("wrong@example.com");
      cy.get("#password").type("wrongpass");
      cy.get("button").click();
      cy.get("#login-message").should("have.text", "ログイン失敗");
  });
});
