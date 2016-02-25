var app = angular.module('elvoceroApp', ['ngRoute', 'ui.bootstrap', 'youtube-controller', 'youtube-service', 'youtube-directive']);

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



        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        var currIndex = 0;

        
        $scope.slider = {};
        $http.get('./php/imagenesGetImagen.php?i=' + codigo).success(function (datos) {

            $scope.slider = datos;

        });
        

        $scope.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'http://lorempixel.com/' + newWidth + '/300',
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                id: currIndex++
            });
        }; 

        $scope.randomize = function () {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }



    }]);

//CONTROLADOR PARA SLIDER //




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

