angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {

    $scope.nome = 'Bruno';

    $scope.ola = ola;

    function ola() {
        alert('olá');
    }

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);

    function onTesteEnvioEvento(event, data) {
        var teste = data;

        console.log('Nome: ', event.currentScope.nome);
    }
}