app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "partials/home.html"
  })
  .when("/london", {
    templateUrl : "partials/london.html"
  })
  .when("/canada", {
      templateUrl : "partials/canada.html"
  })
  .when("/who", {
      templateUrl : "partials/who.html"
  })
});