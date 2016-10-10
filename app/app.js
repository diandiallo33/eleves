'use strict';

// Declare app level module which depends on views, and components
angular.module('appEleves', [
    'ngRoute',
    'core',
    'listeEleves',
    'detailEleves',
    'ajouterEleve',
    'modifierEleve',
    'supprimerEleve'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
          .when('/eleves/ajouterEleve', {
          template: '<ajouter-eleve></ajouter-eleve>'
           })
          .when('/eleves/:idEleve', {
          template: '<detail-eleves></detail-eleves>'
           })
           .when('/eleves/modifier/:idEleve', {
          template: '<modifier-eleve></modifier-eleve>'
           })
          .when('/eleves/supprimerEleve/:idEleve', {
              template: '<supprimer-eleve></supprimer-eleve>'
          })
          .otherwise({redirectTo: '/eleves'});
}])
;
