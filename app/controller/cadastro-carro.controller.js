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
    $scope.excluir = excluir;

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

    $scope.gridOptions = {
      columnDefs: [
          {name: 'Nome do carro', field: 'nomeCarro', minWidth: 230},
          {name: 'Cor do carro', field:'cor', width: 130},
          {name: 'Dt lancamento', field:'dataLancamento',
            cellTemplate:'app/template/grid/cell-template-date.html',
            width: 150},
          {name:'', field:'excluir',
            cellTemplate: 'app/template/grid/cell-template-excluir.html',
            width: 40}
      ],
        data:'listaCarros',
        enableColumnsMenus: false
    };

    function excluir(linha) {
        var index = $scope.listaCarros.indexOf(linha);
        $scope.listaCarros.splice(index, 1);
    }
}