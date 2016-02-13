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
    }]);

//CONSULTAS PARA LAS SINTESIS DE TODAS LAS NOTICIAS EN CADA UNA DE LAS SECCIONES 


//sección de Publicidad en las Notas
app.controller('publicidadEnNotas', ['$scope', '$http', function ($scope, $http) {
        $scope.publicidadNotas = {};
        $http.get('./php/consultaPublicidadEnNotas.php').success(function (arrayPublicidadNotas) {
            $scope.publicidadNotas = arrayPublicidadNotas;
        });

    }]);


//sección de Municipios

app.controller('seccionMunicipios', ['$scope', '$http', function ($scope, $http) {

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
    }]);


//sección de Politíca y Gobierno
app.controller('seccionPolitica', ['$scope', '$http', function ($scope, $http) {

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

    }]);


//sección Policía
app.controller('seccionPolicia', ['$scope', '$http', function ($scope, $http) {
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
    }]);

//sección Deportes
app.controller('seccionDeportes', ['$scope', '$http', function ($scope, $http) {

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

    }]);


//sección Espectáculos
app.controller('seccionEspectaculos', ['$scope', '$http', function ($scope, $http) {
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
    }]);


//sección videos
app.controller('seccionVideos', ['$scope', '$http', function ($scope, $http) {
        $scope.seccVideos = {};
        $http.get('./php/consultaSeccionVideos.php').success(function (arrayVideos) {
            $scope.seccVideos = arrayVideos;

            var cont = 3;
            $scope.totalNoticias = $scope.seccVideos.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.seccVideos.length > $scope.posicion) {
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
    }]);


//sección Publicidad
app.controller('seccionPublicidad', ['$scope', '$http', function ($scope, $http) {
        $scope.publicidad = {};
        $http.get('./php/consultaSeccionPublicidad.php').success(function (arrayPublicidad) {
            $scope.publicidad = arrayPublicidad;

            var cont = 3;
            $scope.totalNoticias = $scope.publicidad.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.publicidad.length > $scope.posicion) {
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
    }]);


   