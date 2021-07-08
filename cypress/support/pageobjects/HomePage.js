/// <reference types="Cypress"  />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {

    //Acessa o site que será realizado o teste
    acessarSite(){
        cy.visit(url)
    }

    //Clica no botao Unidade da barra do menu
    clicarBotaoMenuUnidade(){
        cy.get(homeElements.botaoMenuUnidade()).contains('Unidades').click()
    }

    //Marca o checkbox de 3 filtros
    selecionarFiltros(){
        cy.get(homeElements.filtroFacilidade()).click()
        cy.get(homeElements.checkboxFiltro1()).contains('Bicicletário e vaga verde').click()
        cy.get(homeElements.checkboxFiltro2()).contains('Atendimento aos domingos').click()
        cy.get(homeElements.checkboxFiltro3()).contains('Vacinação').click()
    }

    //Clica no botao Ver detalhes
    clicarVerDetalhes(){
        cy.get(homeElements.botaoVerDetalhes()).contains('Ver detalhes').click({force:true})
    }

    //Valida o nome da unidade
    visualizarNomeUnidade(){
        cy.get(homeElements.textoUnidade()).should('have.text', 'República do Líbano I')
    }

}

export default HomePage;