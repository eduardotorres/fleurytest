Feature: Validar os nomes das unidades 

Scenario: Entrar no site da Fleury, filtrar as unidades com 3 opcoes e validar os nomes.
    Given acesso a pagina das unidades
    When filtro as opcoes
    Then devo validar o nome da unidade