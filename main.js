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
    let listaRegiaoJSON;
    let listaEstadosARRAY = []

    estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {

        if (estados.regiao == regiao) {

            let estadoRecolhido = {}

            estadoRecolhido.uf = estados.sigla

            estadoRecolhido.descricao = estados.nome

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

    estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {

        if(estados.capital_pais != undefined){

            let capitais = {}

                capitais.capital_atual = estados.capital_pais.capital

                capitais.uf = estados.sigla

                capitais.descricao = estados.nome

                capitais.capital = estados.capital

                capitais.regiao = estados.regiao

                capitais.capital_pais_ano_inicio = estados.capital_pais.ano_inicio

                capitais.capital_pais_ano_termino = estados.capital_pais.ano_fim

                listaCapitaisARRAY.push(capitais)

        }

    })

    listaCapitalBrJSON = {}

    listaCapitalBrJSON.capitais = listaCapitaisARRAY

    return listaCapitalBrJSON


}

const getCidades = function (siglaDoEstado) {

    let siglaEstado = siglaDoEstado.toUpperCase();
    let listaCidadesJSON;
    let listaCidadesArray = []

        estadosBrasileiros.estadosCidades.estados.forEach(function (estados) {
            if (estados.sigla == siglaEstado) {
                listaCidadesJSON = {};

                listaCidadesJSON.uf = estados.sigla;
                listaCidadesJSON.descricao = estados.nome
                listaCidadesJSON.quantidade_cidades = estados.cidades.length;

                estados.cidades.forEach(function (cidade) {
                    listaCidadesArray.push(cidade.nome)
                })

                listaCidadesJSON.cidades = listaCidadesArray

            }

        })

    return listaCidadesJSON

}

console.log(getCidades('AC'))