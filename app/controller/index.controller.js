angular.module('pdApp').controller('IndexController', IndexController);

function IndexController($scope) {

    $scope.nome = 'Bruno';

    $scope.ola = ola;

    function ola() {
        alert('olá');
    }
}