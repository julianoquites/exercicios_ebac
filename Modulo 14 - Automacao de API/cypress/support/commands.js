import { faker } from "@faker-js/faker";

Cypress.Commands.add("token", (email, senha) => {
  cy.request({
    method: "POST",
    url: "login",
    body: {
      email: email,
      password: senha,
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    return response.body.authorization;
  });
});

Cypress.Commands.add(
  "cadastrarProduto",
  (token, produto, preco, descricao, quantidade) => {
    cy.request({
      method: "POST",
      url: "produtos",
      headers: { authorization: token },
      body: {
        nome: produto,
        preco: preco,
        descricao: descricao,
        quantidade: quantidade,
      },
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add("gerarDadosUsuario", () => {
  return {
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: faker.datatype.boolean().toString(),
  };
});

Cypress.Commands.add(
  "cadastrarUsuario",
  (nome, email, password, isAdministrador) => {
    cy.request({
      method: "POST",
      url: "usuarios",
      body: {
        nome: nome,
        email: email,
        password: password,
        administrador: isAdministrador,
      },
      failOnStatusCode: false,
    });
  }
);
