/* global Given, Then, When */
  
import {Given} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../pageobjects/HomePage'
const homePage = new HomePage

Given("acesso a pagina das unidades", () => {
    homePage.acessarSite();
    homePage.clicarBotaoMenuUnidade();
})

When("filtro as opcoes", () => {
    homePage.selecionarFiltros();
    homePage.clicarVerDetalhes();
})

Then("devo validar o nome da unidade", () => {
    homePage.visualizarNomeUnidade();
})