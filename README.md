# Teste de Unidade da Fleury

Foi utilizado o site oficial da Fleury (https://www.fleury.com.br/) para a realização dos testes. Cujo o cenário em BDD, é acessar a tela de Unidades, selecionar os filtros e validar o nome da primeira unidade exibida.

## Requisitos

Ferramentas:

- [VSCode](https://code.visualstudio.com/Download)
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- 
Dependências:

- [Allure](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)

## Estrutura de diretórios

```js
./projeto
├─ cypress/
    ├─ fixtures
    └─ integration/
        └─ ValidarNomeUnidade.feature
    └─ plugins/
        └─ index.js
    └─ support/
       └─ elements
          └─ HomeElements.js 
       └─ pageobjects
          └─ HomePage.js    
       └─ steps
          └─ ValidacaoNomeUnidadeSteps.js           
       ├─ commandsContas.js
       └─ index.js
```

- cypress: diretório principal
- plugins: diretório onde será possível estender alguns comportamentos da ferramenta
- support: diretório com arquivos de comandos customizados e elementos mapeados para os testes funcionais



## Executando via linha de comando

Foram construídos scripts que se encontram no arquivo package.json:

Abrir a ferramenta

`npx open cypress`

---

Rodar os testes no browser chrome </p>

`npm run test:chrome`

---

Rodar os testes com Allure Report </p>

`npm run test:chrome --env allure=true`


