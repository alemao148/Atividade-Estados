/************************************************************************
 * Objetivo: Criar um JSON com as informações de paises.
 * Autor: Cauã Felipe
 * Data: 03/03/2023
 * Versão: 1.0
 ************************************************************************/


var estadosBrasileiros = require('./JSON/estados_cidades.js')

const getListaDeEstados = function() {
    let listaEstadosJSON = {}
    let listaEstadosARRAY = []

    estadosBrasileiros.estadosCidades.estados.forEach(function(estados) {
        listaEstadosARRAY.push(estados.sigla)
    });

    listaEstadosJSON.uf = listaEstadosARRAY
    listaEstadosJSON.quantidade = listaEstadosARRAY.length

    return listaEstadosJSON
}

const getDadosEstado = function(siglaDoEstado) {
    let estadoSigla = siglaDoEstado
    let listadadosEstadoJSON = false

    estadosBrasileiros.estadosCidades.estados.forEach(function(estados) {
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

const getCapitalEstado = function(siglaDoEstado) {
    let capitalEstado = siglaDoEstado
    let listacapitalEstados = false

    estadosBrasileiros.estadosCidades.estados.forEach(function(estados) {
        if (estados.sigla == capitalEstado) {
            listacapitalEstados = {}

            listacapitalEstados.uf = estados.sigla
            listacapitalEstados.descricao = estados.nome
            listacapitalEstados.capital = estados.capital
        }
    });

    return listacapitalEstados
}

const getEstadosRegiao = function(regiao) {
    let regiaoEstado = regiao
    let listaRegiaoJSON;
    let lisaEstadosARRAY = []

    estadosBrasileiros.estadosCidades.estados.forEach(function(estados) {
        if (estados.sigla == regiaoEstado) {
            let listaEstadoJSON = {}

            listaEstadoJSON.uf = estados.sigla
            listaEstadoJSON.descricao = estados.nome

            lisaEstadosARRAY.push(listaEstadoJSON)

        }

        if (lisaEstadosARRAY.length !== 0) {
            listaRegiaoJSON = {}
            listaRegiaoJSON.regiao =  regiao;
            listaRegiaoJSON.estados = lisaEstadosARRAY;

        } else {
            return listaRegiaoJSON = false
        }
    });

    return listaRegiaoJSON

}

const getCapitalPais = function() {

}

const getCidades = function(siglaDoEstado) {

}

console.log(getEstadosRegiao('Sul'))