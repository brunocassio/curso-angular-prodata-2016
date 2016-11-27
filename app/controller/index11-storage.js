/**
 * Created by bru9isk on 26/11/16.
 */
(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('IndexController', IndexController);

    function IndexController(localStorageService) {
        var vm = this;

        vm.lista = [
            {nome: 'Bruno', sexo:'M'}
        ];
        vm.listaAux = [];

        vm.setarInformacoesNoStorage = setarInformacoesNoStorage;

        iniciar();

        function iniciar() {
            verificarSuporteAoStorage();
            vm.listaAux = localStorageService.get('listaTeste');
        }

        function verificarSuporteAoStorage() {
            if(!localStorageService.isSupported){
                alert('Desculpe, mas seu navegador não suporta nossa aplicação!');
            }
        }

        function setarInformacoesNoStorage() {
            localStorageService.set('listaTeste', vm.lista);
        }
    }

})();


