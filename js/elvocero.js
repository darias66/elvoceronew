var app = angular.module('elvoceroApp', ['ui.bootstrap', 'ngRoute']);

//CONTROLADOR PRINCIPAL
app.controller('menuCtrl', ['$scope', function ($scope) {
        $scope.menuSuperior = 'fijos/encabezado.html';
        $scope.menuInferior = 'fijos/footer.html';

        $scope.publicidad = 'publicidadNotas.html';

        $scope.slogan = "El Vocero | La voz oficial de la noticia";

//        $scope.menus = {};
//        $http.get('./php/menusListado.php').success(function (distribuidora) {
//            $scope.menus = distribuidora;
//        });


    }]);


app.controller('consultaSecciones', ['$scope', '$http', function ($scope, $http) {

//CONSULTAS PARA LAS ULTIMAS NOTICIAS DE TODAS LAS SECCIONES EN PORTADA
        $scope.noticia = {};
        $http.get('./php/consultaSeccionMunicipios.php').success(function (arraySeccMpios) {
            $scope.noticia = arraySeccMpios;
        });

        $scope.politica = {};
        $http.get('./php/consultaSeccionPolitica.php').success(function (arraySeccGob) {
            $scope.politica = arraySeccGob;
        });

        $scope.policia = {};
        $http.get('./php/consultaSeccionPolicia.php').success(function (arraySeccPolicia) {
            $scope.policia = arraySeccPolicia;
        });

        $scope.deportes = {};
        $http.get('./php/consultaSeccionDeportes.php').success(function (arraySeccDeportes) {
            $scope.deportes = arraySeccDeportes;
        });

        $scope.espec = {};
        $http.get('./php/consultaSeccionEspectaculos.php').success(function (arraySeccEspec) {
            $scope.espec = arraySeccEspec;
        });


//CONSULTAS PARA LAS SINTESIS DE TODAS LAS NOTICIAS EN CADA UNA DE LAS SECCIONES 

        //sección de Municipios
        $scope.mpios = {};
        $http.get('./php/consultaSeccMupios.php').success(function (arraySeccMupios) {
            $scope.mpios = arraySeccMupios;

            var cont = 5;
            $scope.totalNoticias = $scope.mpios.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.mpios.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };

        });

        //sección de Politíca y Gobierno
        $scope.gobierno = {};
        $http.get('./php/consultaSintesisSeccGob.php').success(function (arrayGobierno) {
            $scope.gobierno = arrayGobierno;

            var cont = 5;
            $scope.totalNoticias = $scope.gobierno.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.gobierno.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };

        });

        //sección Policía
        $scope.policiaca = {};
        $http.get('./php/consultaSintesisSeccPolicia.php').success(function (arrayPoliciaca) {
            $scope.policiaca = arrayPoliciaca;

            var cont = 5;
            $scope.totalNoticias = $scope.policiaca.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.policiaca.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };
        });

        //sección Deportes
        $scope.deportivas = {};
        $http.get('./php/consultaSintesisSeccDeportes.php').success(function (arrayDeportes) {
            $scope.deportivas = arrayDeportes;

            var cont = 5;
            $scope.totalNoticias = $scope.deportivas.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.deportivas.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };
        });

        //sección Espectáculos
        $scope.espectaculos = {};
        $http.get('./php/consultaSintesisSeccEspectaculos.php').success(function (arrayEspectaculos) {
            $scope.espectaculos = arrayEspectaculos;

            var cont = 5;
            $scope.totalNoticias = $scope.espectaculos.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.espectaculos.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };
        });

        //sección videos
        $scope.seccVideos = {};
        $http.get('./php/consultaSeccionVideos.php').success(function (arrayVideos) {
            $scope.seccVideos = arrayVideos;

            var cont = 9;
            $scope.totaldeNoticias = $scope.seccVideos.length;

            $scope.posicion1 = cont;

            $scope.siguientes = function () {
                if ($scope.seccVideos.length > $scope.posicion1) {
                    $scope.posicion1 += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion1 > cont) {
                    $scope.posicion1 -= cont;
                }
                ;
            };
        });
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
app.controller('videoCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams,$http) {


//        $scope.mensaje = "FUNCIONA CONTRALADOR";
        var video = $routeParams.idVideos;

        $scope.videos = {};
        $http.get('./php/videos.getVideos.php?v=' + video).success(function (arraySeccVideos) {

            $scope.videos = arraySeccVideos[0];
        });

    }]);


