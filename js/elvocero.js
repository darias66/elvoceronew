var app = angular.module('elvoceroApp', ['ngRoute']);

app.controller('menuCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.menuSuperior = 'fijos/encabezado.html';
        $scope.menuInferior = 'fijos/footer.html';

        $scope.publicidad = 'publicidadNotas.html';

        $scope.titulo = "El Vocero | La voz oficial de la noticia";

        $scope.menus = {};
        $http.get('./php/menusListado.php').success(function (distribuidora) {
            $scope.menus = distribuidora;

           
            
        });


    }]);

