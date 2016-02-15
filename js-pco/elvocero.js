var app = angular.module('elvoceroApp', ['ngRoute', 'youtube-controller', 'youtube-service', 'youtube-directive']);

//CONTROLADOR PRINCIPAL
app.controller('menuCtrl', ['$scope', function ($scope) {
        $scope.menuSuperior = 'header-footer/encabezado.html';
        $scope.menuInferior = 'header-footer/footer.html';

        $scope.publicidad = 'publicidadNotas.html';

        $scope.slogan = "El Vocero | La voz oficial de la noticia";

    }]);


//CONTROLADOR PARA LAS NOTAS

app.controller('noticiaCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        var codigo = $routeParams.id;

        $scope.nota = {};
        $http.get('./php/noticias.getNoticia.php?c=' + codigo).success(function (data) {

        $scope.nota = data;

        });
        
        $scope.slides = {};
        $http.get('./php/imagenes.getImagen.php?i=' + codigo).success(function (datos) {

        $scope.slides = datos;

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

app.controller('mpiosCtrl', function ($scope) {
    $scope.municipios = [{
            "idmunicipio": "1",
            "municipio": "Abal\u00e1"
        }, {
            "idmunicipio": "2",
            "municipio": "Acanceh"
        }, {
            "idmunicipio": "3",
            "municipio": "Akil"
        }, {
            "idmunicipio": "4",
            "municipio": "Baca"
        }, {
            "idmunicipio": "5",
            "municipio": "Bokob\u00e1"
        }, {
            "idmunicipio": "6",
            "municipio": "Buctzotz"
        }, {
            "idmunicipio": "7",
            "municipio": "Cacalch\u00e9n"
        }, {
            "idmunicipio": "8",
            "municipio": "Calotmul"
        }, {
            "idmunicipio": "9",
            "municipio": "Cansahcab"
        }, {
            "idmunicipio": "10",
            "municipio": "Cantamayec"
        }, {
            "idmunicipio": "11",
            "municipio": "Celest\u00fan"
        }, {
            "idmunicipio": "12",
            "municipio": "Cenotillo"
        }, {
            "idmunicipio": "13",
            "municipio": "Conkal"
        }, {
            "idmunicipio": "14",
            "municipio": "Cuncunul"
        }, {
            "idmunicipio": "15",
            "municipio": "Cuzam\u00e1"
        }, {
            "idmunicipio": "16",
            "municipio": "Chacsink\u00edn"
        }, {
            "idmunicipio": "17",
            "municipio": "Chankom"
        }, {
            "idmunicipio": "18",
            "municipio": "Chapab"
        }, {
            "idmunicipio": "19",
            "municipio": "Chemax"
        }, {
            "idmunicipio": "20",
            "municipio": "Chicxulub Pueblo"
        }, {
            "idmunicipio": "21",
            "municipio": "Chichimil\u00e1"
        }, {
            "idmunicipio": "22",
            "municipio": "Chikindzonot"
        }, {
            "idmunicipio": "23",
            "municipio": "Chochol\u00e1"
        }, {
            "idmunicipio": "24",
            "municipio": "Chumayel"
        }, {
            "idmunicipio": "25",
            "municipio": "Dzan"
        }, {
            "idmunicipio": "26",
            "municipio": "Dzemul"
        }, {
            "idmunicipio": "27",
            "municipio": "Dzidzant\u00fan"
        }, {
            "idmunicipio": "28",
            "municipio": "Dzilam de Bravo"
        }, {
            "idmunicipio": "29",
            "municipio": "Dzilam Gonz\u00e1lez"
        }, {
            "idmunicipio": "30",
            "municipio": "Dzit\u00e1s"
        }, {
            "idmunicipio": "31",
            "municipio": "Dzoncauich"
        }, {
            "idmunicipio": "32",
            "municipio": "Espita"
        }, {
            "idmunicipio": "33",
            "municipio": "Halach\u00f3"
        }, {
            "idmunicipio": "34",
            "municipio": "Hocab\u00e1"
        }, {
            "idmunicipio": "35",
            "municipio": "Hoct\u00fan"
        }, {
            "idmunicipio": "36",
            "municipio": "Hom\u00fan"
        }, {
            "idmunicipio": "37",
            "municipio": "Huh\u00ed"
        }, {
            "idmunicipio": "38",
            "municipio": "Hunucm\u00e1"
        }, {
            "idmunicipio": "39",
            "municipio": "Ixil"
        }, {
            "idmunicipio": "40",
            "municipio": "Izamal"
        }, {
            "idmunicipio": "41",
            "municipio": "Kanas\u00edn"
        }, {
            "idmunicipio": "42",
            "municipio": "Kantunil"
        }, {
            "idmunicipio": "43",
            "municipio": "Kaua"
        }, {
            "idmunicipio": "44",
            "municipio": "Kinchil"
        }, {
            "idmunicipio": "45",
            "municipio": "Kopom\u00e1"
        }, {
            "idmunicipio": "46",
            "municipio": "Mama"
        }, {
            "idmunicipio": "47",
            "municipio": "Man\u00ed"
        }, {
            "idmunicipio": "48",
            "municipio": "Maxcan\u00fa"
        }, {
            "idmunicipio": "49",
            "municipio": "Mayap\u00e1n"
        }, {
            "idmunicipio": "50",
            "municipio": "M\u00e9rida"
        }, {
            "idmunicipio": "51",
            "municipio": "Mococh\u00e1"
        }, {
            "idmunicipio": "52",
            "municipio": "Motul"
        }, {
            "idmunicipio": "53",
            "municipio": "Muna"
        }, {
            "idmunicipio": "54",
            "municipio": "Muxupip"
        }, {
            "idmunicipio": "55",
            "municipio": "Opich\u00e9n"
        }, {
            "idmunicipio": "56",
            "municipio": "Oxkutzcab"
        }, {
            "idmunicipio": "57",
            "municipio": "Panab\u00e1"
        }, {
            "idmunicipio": "58",
            "municipio": "Peto"
        }, {
            "idmunicipio": "59",
            "municipio": "Progreso"
        }, {
            "idmunicipio": "60",
            "municipio": "Quintana Roo"
        }, {
            "idmunicipio": "61",
            "municipio": "R\u00edo Lagartos"
        }, {
            "idmunicipio": "62",
            "municipio": "Sacalum"
        }, {
            "idmunicipio": "63",
            "municipio": "Samahil"
        }, {
            "idmunicipio": "64",
            "municipio": "Sanahcat"
        }, {
            "idmunicipio": "65",
            "municipio": "San Felipe"
        }, {
            "idmunicipio": "66",
            "municipio": "Santa Elena"
        }, {
            "idmunicipio": "67",
            "municipio": "Sey\u00e9"
        }, {
            "idmunicipio": "68",
            "municipio": "Sinanch\u00e9"
        }, {
            "idmunicipio": "69",
            "municipio": "Sotuta"
        }, {
            "idmunicipio": "70",
            "municipio": "Sucil\u00e1"
        }, {
            "idmunicipio": "71",
            "municipio": "Sudzal"
        }, {
            "idmunicipio": "72",
            "municipio": "Suma de Hidalgo"
        }, {
            "idmunicipio": "73",
            "municipio": "Tahdzi\u00fa"
        }, {
            "idmunicipio": "74",
            "municipio": "Tahmek"
        }, {
            "idmunicipio": "75",
            "municipio": "Teabo"
        }, {
            "idmunicipio": "76",
            "municipio": "Tecoh"
        }, {
            "idmunicipio": "77",
            "municipio": "Tekal de Venegas"
        }, {
            "idmunicipio": "78",
            "municipio": "Tekant\u00f3"
        }, {
            "idmunicipio": "79",
            "municipio": "Tekax"
        }, {
            "idmunicipio": "80",
            "municipio": "Tekit"
        }, {
            "idmunicipio": "81",
            "municipio": "Tekom"
        }, {
            "idmunicipio": "82",
            "municipio": "Telchac Pueblo"
        }, {
            "idmunicipio": "83",
            "municipio": "Telchac Puerto"
        }, {
            "idmunicipio": "84",
            "municipio": "Temax"
        }, {
            "idmunicipio": "85",
            "municipio": "Temoz\u00f3n"
        }, {
            "idmunicipio": "86",
            "municipio": "Tepak\u00e1n"
        }, {
            "idmunicipio": "87",
            "municipio": "Tetiz"
        }, {
            "idmunicipio": "88",
            "municipio": "Teya"
        }, {
            "idmunicipio": "89",
            "municipio": "Ticul"
        }, {
            "idmunicipio": "90",
            "municipio": "Timucuy"
        }, {
            "idmunicipio": "91",
            "municipio": "Tinum"
        }, {
            "idmunicipio": "92",
            "municipio": "Tixcacalcupul"
        }, {
            "idmunicipio": "93",
            "municipio": "Tixkokob"
        }, {
            "idmunicipio": "94",
            "municipio": "Tixm\u00e9huac"
        }, {
            "idmunicipio": "95",
            "municipio": "Tizim\u00edn"
        }, {
            "idmunicipio": "96",
            "municipio": "Tunk\u00e1s"
        }, {
            "idmunicipio": "97",
            "municipio": "Tzucacab"
        }, {
            "idmunicipio": "98",
            "municipio": "Uayma"
        }, {
            "idmunicipio": "99",
            "municipio": "Uc\u00fa"
        }, {
            "idmunicipio": "100",
            "municipio": "Um\u00e1n"
        }, {
            "idmunicipio": "101",
            "municipio": "Valladolid"
        }, {
            "idmunicipio": "102",
            "municipio": "Xocchel"
        }, {
            "idmunicipio": "103",
            "municipio": "Yaxcab\u00e1"
        }, {
            "idmunicipio": "104",
            "municipio": "Yaxkukul"
        }, {
            "idmunicipio": "105",
            "municipio": "Yoba\u00edn"
        }, {
            "idmunicipio": "106",
            "municipio": "Tixp\u00e9hual"
        }];


});