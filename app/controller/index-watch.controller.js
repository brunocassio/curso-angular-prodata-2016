/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .controller('IndexWatchController', IndexWatchController);

IndexWatchController.$inject = ['$scope'];

function IndexWatchController($scope) {

    $scope.dispararEvento = dispararEvento;

    $scope.classeCss = '';
    $scope.cor = '';
    $scope.styleDiv = {
      width: '150px',
      height: '150px'
    };

    $scope.$watch('cor', onWatchCor);

    function onWatchCor(valorNovo, valorAntigo) {
        if(valorNovo === valorAntigo){
            return;
        }

        $scope.styleDiv.backgroundColor = valorNovo;
    }

    function dispararEvento() {
        $scope.$emit('testeEnvioEvento', {valor: 'Enviando evento'})
    }
}