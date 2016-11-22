/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .controller('IndexRouterController', IndexRouterController);

function IndexRouterController($scope, $state) {
    $scope.abrirPagina = abrirPagina;

    function abrirPagina(nomeState) {
        $state.go(nomeState);
    }
}