/************************************************************************
 * Objetivo: Criar um JSON com as informações de paises.
 * Autor: Cauã Felipe
 * Data: 03/03/2023
 * Versão: 1.0
 ************************************************************************/


var estadosBrasileiros = require('./JSON/estados_cidades.js')

const getListaDeEstados = function () {
    let listaEstadosJSON = {}
    let listaEstadosARRAY = []

    estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {
        listaEstadosARRAY.push(estados.sigla)
    });

    listaEstadosJSON.uf = listaEstadosARRAY
    listaEstadosJSON.quantidade = listaEstadosARRAY.length

    return listaEstadosJSON
}

const getDadosEstado = function (siglaDoEstado) {
    let estadoSigla = siglaDoEstado
    let listadadosEstadoJSON = false

    estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {
        if (estados.sigla == estadoSigla) {
            listadadosEstadoJSON = {}

            listadadosEstadoJSON.uf = estados.sigla
            listadadosEstadoJSON.descricao = estados.nome
            listadadosEstadoJSON.capital = estados.capital
            listadadosEstadoJSON.regiao = estados.regiao
        }
    });

    return listadadosEstadoJSON

}

const getCapitalEstado = function (siglaDoEstado) {
    let capitalEstado = siglaDoEstado
    let listacapitalEstados = false

    estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {
        if (estados.sigla == capitalEstado) {
            listacapitalEstados = {}

            listacapitalEstados.uf = estados.sigla
            listacapitalEstados.descricao = estados.nome
            listacapitalEstados.capital = estados.capital
        }
    });

    return listacapitalEstados
}

const getEstadosRegiao = function (regiao) {
    let primeiraLetra = regiaoDoBrasil.charAt(0).toUpperCase();

    let restoDaPalavra = regiaoDoBrasil.slice(1).toLowerCase();

    let regiao = primeiraLetra + restoDaPalavra;
    let listaRegiaoJSON;
    let listaEstadosARRAY = []

    estadosBrasil.estadosCidades.estados.forEach(function (estado) {

        if (estado.regiao == regiao) {

            let estadoRecolhido = {}

            estadoRecolhido.uf = estado.sigla

            estadoRecolhido.descricao = estado.nome

            listaEstadosARRAY.push(estadoRecolhido)

        }

    })

    if (listaEstadosARRAY.length != 0) {

        listaRegiaoJSON = {}

        listaRegiaoJSON.regiao = regiao;

        listaRegiaoJSON.estados = listaEstadosARRAY;

    } else {

        listaRegiaoJSON = false;

    }

    return listaRegiaoJSON;

}

const getCapitalPais = function () {

    let listaCapitalBrJSON;

    let listaCapitaisARRAY = []

    estadosBrasil.estadosCidades.estados.forEach(function (estado) {

        if(estado.capital_pais != undefined){

            let capitais = {}

                capitais.capital_atual = estado.capital_pais.capital

                capitais.uf = estado.sigla

                capitais.descricao = estado.nome

                capitais.capital = estado.capital

                capitais.regiao = estado.regiao

                capitais.capital_pais_ano_inicio = estado.capital_pais.ano_inicio

                capitais.capital_pais_ano_termino = estado.capital_pais.ano_fim

                listaCapitaisARRAY.push(capitais)

        }

    })

    listaCapitalBrJSON = {}

    listaCapitalBrJSON.capitais = listaCapitaisARRAY

    return listaCapitalBrJSON


}

const getCidades = function (siglaDoEstado) {

}

console.log(getEstadosRegiao('Sul'))