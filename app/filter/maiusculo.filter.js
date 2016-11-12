/**
 * Created by bru9isk on 12/11/16.
 */
angular.module('pdApp')
    .filter('maiusculo', maiusculo);

function maiusculo() {
    return function(input){

        if(!input){
            return '';
        }

        return input.toUpperCase();
    }
}