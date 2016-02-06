var app = angular.module('elvoceroApp', ['ngRoute']);

app.controller('menuCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.menuSuperior = 'fijos/encabezado.html';
        $scope.menuInferior = 'fijos/footer.html';

        $scope.publicidad = 'publicidadNotas.html';

        $scope.slogan = "El Vocero | La voz oficial de la noticia";

        $scope.menus = {};
        $http.get('./php/menusListado.php').success(function (distribuidora) {
            $scope.menus = distribuidora;
        });


    }]);


app.controller('consultaSecciones', ['$scope', '$http', function ($scope, $http) {

        $scope.noticia = {};
        $http.get('./php/consultaSeccionMunicipios.php').success(function (arraySeccMpios) {
            $scope.noticia = arraySeccMpios;
        });
        
        $scope.politica = {};
        $http.get('./php/consultaSeccionPolitica.php').success(function (arraySeccGob) {
            $scope.politica = arraySeccGob;
        });
        

    }]);
