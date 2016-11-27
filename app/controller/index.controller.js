angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {

    var ic = this;

    ic.nome = 'Bruno';

    ic.ola = ola;

    function ola() {
        alert('olá');
    }

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);

    function onTesteEnvioEvento(event, data) {
        var teste = data;

        console.log('Nome: ', event.currentScope.nome);
    }
}