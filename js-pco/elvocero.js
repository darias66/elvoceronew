var app = angular.module('elvoceroApp', ['ui.bootstrap', 'ngRoute', 'youtube-controller', 'youtube-service', 'youtube-directive']);

//CONTROLADOR PRINCIPAL
app.controller('menuCtrl', ['$scope', function ($scope) {
        $scope.menuSuperior = 'header-footer/encabezado.html';
        $scope.menuInferior = 'header-footer/footer.html';

        $scope.publicidad = 'publicidadNotas.html';

        $scope.slogan = "El Vocero | La voz oficial de la noticia";

//        $scope.menus = {};
//        $http.get('./php/menusListado.php').success(function (distribuidora) {
//            $scope.menus = distribuidora;
//        });


    }]);


//CONTROLADOR PARA LAS NOTAS

app.controller('noticiaCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        $scope.prueba = "funciono";

        var codigo = $routeParams.id;

        $scope.nota = {};
        $http.get('./php/noticias.getNoticia.php?c=' + codigo).success(function (arrayNoticia) {

            $scope.nota = arrayNoticia[0];
        });

    }]);


//CONTROLADOR PARA LA SECCION VIDEOS
app.controller('videoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {


        $scope.mensaje = "FUNCIONA CONTRALADOR";
        $scope.idVideos = $routeParams.idVideos;
        var video = $routeParams.idVideos;

        $scope.videos = {};
        $http.get('./php/videosGetVideos.php?v=' + video).success(function (datos) {
           
            $scope.videos = datos;
        });

    }]);

//CONTROLADOR PARA PUBLICIDAD

app.controller('publicidadCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {


        var codigo = $routeParams.idBanners;

        $scope.publico = {};
        $http.get("php/publicidadGetPublicidad.php?c=" + codigo).success(function (data) {

            $scope.publico = data;
        });

    }]);
