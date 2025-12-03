# Projeto QA - Testes Automatizados com Cypress

Este projeto contém testes automatizados E2E (End-to-End) para o site do Governo da Paraíba utilizando Cypress e Cucumber.

## 📋 Pré-requisitos

- Node.js (versão 24 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd PROVA_QA_2025_2
```

2. Instale as dependências:
```bash
npm install
```

## 🧪 Executando os Testes

### Modo Interativo (Interface Gráfica)

Para abrir o Cypress Test Runner:
```bash
npx cypress open
```

### Modo Headless (Linha de Comando)

Para executar os testes em modo headless:
```bash
npx cypress run
```

## 🧩 Funcionalidades Testadas

**Site alvo dos testes:** https://paraiba.pb.gov.br/

### 1. Acesso à Página Inicial
- Validação do carregamento da página
- Verificação do logo do site
- Aceite de cookies

### 2. Navegação pelo Menu
- Abertura do menu hambúrguer
- Navegação pelos itens do menu
- Validação do redirecionamento de páginas

## 📁 Estrutura do Projeto

```
PROVA_QA_2025_2/
├── cypress/
│   ├── e2e/
│   │   ├── feature/          # Arquivos .feature (Gherkin)
│   │   └── steps/            # Implementação dos steps
│   ├── fixtures/             # Dados de teste
│   └── support/              # Comandos customizados
├── cypress.config.js         # Configurações do Cypress
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **Cypress** – Framework de testes E2E
- **Cucumber** – Desenvolvimento orientado a comportamento (BDD)
- **cypress-cucumber-preprocessor** – Integração Cypress + Cucumber

## 📝 Criando Novos Testes

1. Crie um arquivo `.feature` na pasta `cypress/e2e/feature/`
2. Escreva cenários em Gherkin
3. Implemente os steps dentro de `cypress/e2e/steps/`

### Exemplo

**Arquivo .feature:**
```gherkin
Feature: Navegação no site

  Scenario: Acessar página inicial
    Given que estou na página inicial
    When aceito os cookies
    Then devo ver o logo do site
```

**Implementação dos steps:**
```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página inicial', () => {
  cy.visit('https://paraiba.pb.gov.br/');
});

When('aceito os cookies', () => {
  cy.get('[data-testid="accept-cookies"]').click();
});

Then('devo ver o logo do site', () => {
  cy.get('[data-testid="site-logo"]').should('be.visible');
});
```

---

**Autor: Santhiago Santos**