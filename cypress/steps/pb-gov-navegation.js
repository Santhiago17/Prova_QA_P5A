/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://paraiba.pb.gov.br";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
//  =========== 01 - página inicial do gov pb =============
Given("que eu acesso {string}", (url) => {
    cy.visit(url, { failOnStatusCode: false });
});

When("a página carregar completamente", () => {
    cy.get("body", { timeout: 30000 }).should("be.visible");
    cy.wait(2000);
    cy.log("Página carregada completamente");
});

Then("eu devo ver o logo do site com id {string}", (idLogo) => {
    cy.get(`span#${idLogo}`, { timeout: 10000 })
        .should("exist")
        .and("be.visible");
    cy.log(`Logo encontrado com id: ${idLogo}`);
});

Then("eu devo ver {string} na página", (texto) => {
    cy.get('.disclaimer-title', { timeout: 10000 })
        .should("be.visible")
        .invoke('text')
        .then((textoReal) => {
            cy.log(`Texto encontrado: "${textoReal}"`);
            expect(textoReal.toLowerCase()).to.include(texto.toLowerCase());
        });
    cy.log(`Texto "${texto}" encontrado e visível na página`);
});

Then("eu clico no botão {string}", (botaoTexto) => {
    cy.wait(1000);
    cy.get('button[name="collective.disclaimer.ok"]', { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
    cy.log(`Botão "${botaoTexto}" clicado com sucesso`);
    cy.wait(1000);
});
//  =========== 02 - Navegando pelo menu =============

When("eu clico no menu hamburguer", () => {
    cy.get('.ico-navegacao').click({ force: true });
    cy.wait(1000);
});


When("eu clico na opção {string}", (opcaoMenu) => {
    cy.get('#main-navigation li', { timeout: 10000 })
        .contains(opcaoMenu)
        .click({ force: true });
    cy.wait(2000);
});

Then("o menu de navegação deve estar visível", () => {
    cy.get('.navigation-content', { timeout: 10000 })
        .should("be.visible")

});

Then("eu devo ser redirecionado para a página {string}", (urlEsperada) => {
    cy.url({ timeout: 10000 }).should("include", urlEsperada);
});
