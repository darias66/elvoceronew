app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'portada.html'
            }) 
            .when('/municipios', {
                templateUrl: 'municipios.html'
            })
            .when('/politica', {
                templateUrl: 'politica.html'
            })
            .when('/policia', {
                templateUrl: 'policia.html'
            })
            .when('/deportes', {
                templateUrl: 'deportes.html'
            })
            .when('/espectaculos', {
                templateUrl: 'espectaculos.html'
            })
            .when('/publicidad1', {
                templateUrl: 'publicidad1.html'
            })
            .when('/videos', {
                templateUrl: 'videos.html'
            })
            .when('/noticia', {
                templateUrl: 'noticia.html'
            })
            .when('/verVideos', {
                templateUrl: 'verVideos.html'
            })
            .when('/noticiasMunicipios', {
                templateUrl: 'noticiasMunicipios.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

