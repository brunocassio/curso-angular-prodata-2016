/**
 * Created by brunocassio on 29/11/16.
 */
(function () {
    'use strict'

    angular
        .module('pdAppArquitetura')
        .directive('pdHelloWorld', pdHelloWorld);

    function pdHelloWorld() {
        return{
            restrict: 'E',
            template: '<div>Esse é meu primeiro componente</div>'
        };
    }
})();