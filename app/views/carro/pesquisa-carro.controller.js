/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .controller('PesquisaCarroController', PesquisaCarroController);

function PesquisaCarroController($scope) {
    $scope.texto = 'Pesquisa de carros';
}