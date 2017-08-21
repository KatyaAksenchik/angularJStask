angular
    .module('app.filters', [])
    .filter('celcium', function () {
        return function (input, number) {

            if(isNumeric(input)){
                input = input - 273.15 || '';
                if (isNumeric(number)) {
                    input = input.toFixed(number);
                }
            } else {
                input = "";
            }
            return input + "°C";


        };
    });


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}