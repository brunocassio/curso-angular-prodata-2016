/**
 * Created by bru9isk on 12/11/16.
 */
angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, toastr, AlertService) {

    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;


    function salvar() {


        if($scope.carroForm.$invalid){
            AlertService.error('Formulario Inválido');
            $scope.carroForm.nomeCarro.$setTouched();
            $scope.carroForm.cor.$setTouched();
            return;
        }
        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
    }

}