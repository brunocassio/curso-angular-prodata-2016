/**
 * Created by bru9isk on 26/11/16.
 */
(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdSelect', pdSelect);

    function pdSelect() {

        return {
            template: 'arquitetura/directivas/pd-select/pd-select.html',
            restrict: 'E',
            scope: {
                selectedValue: '='
            },
            link: link
        };


        function link(scope, element, attrs) {
            scope.countries = [{
                name: 'Vereinigte Arabische Emirate',
                value: 'AE'
            }, {
                name: 'Andorra',
                value: 'AD'
            }, ];
            scope.selectedValue = scope.countries[1];
        }
    }
})();

