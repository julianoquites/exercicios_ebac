/// <reference types="cypress" />
import contrato from "../contracts/usuarios.contract";

describe("Testes da Funcionalidade 'Usuários'", () => {
  it("Deve validar contrato de usuários - GET", () => {
    cy.request("usuarios").then((response) => {
      return contrato.validateAsync(response.body);
    });
  });

  it("Deve listar usuários cadastrados - GET", () => {
    cy.request({
      method: "GET",
      url: "usuarios",
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("usuarios");
    });
  });

  it("Deve cadastrar um novo usuário com sucesso - POST", () => {
    cy.gerarDadosUsuario().then(({ nome, email, password, administrador }) => {
      cy.cadastrarUsuario(nome, email, password, administrador).should(
        (response) => {
          expect(response.status).to.equal(201);
          expect(response.body.message).to.equal(
            "Cadastro realizado com sucesso"
          );
        }
      );
    });
  });

  it("Deve validar um usuário com email já cadastrado - POST", () => {
    cy.gerarDadosUsuario().then(({ nome, password, administrador }) => {
      cy.cadastrarUsuario(
        nome,
        "fulano@qa.com",
        password,
        administrador
      ).should((response) => {
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal(
          "Este email já está sendo usado"
        );
      });
    });
  });

  it("Deve editar um usuário previamente cadastrado com sucesso - PUT", () => {
    cy.gerarDadosUsuario().then(({ nome, email, password, administrador }) => {
      cy.cadastrarUsuario(nome, email, password, administrador).then(
        (response) => {
          let id = response.body._id;
          cy.request({
            method: "PUT",
            url: `usuarios/${id}`,
            body: {
              nome,
              email,
              password,
              administrador,
            },
          }).should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal(
              "Registro alterado com sucesso"
            );
          });
        }
      );
    });
  });

  it("Deve deletar um usuário previamente cadastrado - DELETE", () => {
    cy.gerarDadosUsuario().then(({ nome, email, password, administrador }) => {
      cy.cadastrarUsuario(nome, email, password, administrador).then(
        (response) => {
          let id = response.body._id;
          cy.request({
            method: "DELETE",
            url: `usuarios/${id}`,
          }).should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal(
              "Registro excluído com sucesso"
            );
          });
        }
      );
    });
  });
});
