'use strict';

angular.
  module('detailEleves').
  component('detailEleves', {
    templateUrl: 'detail-eleves/detail-eleve.template.html',
    controller: ['$routeParams','$scope','$rootScope', 'factoryEleve',
      function DetailEleveController($routeParams, $scope,$rootScope,factoryEleve) {

           angular.forEach( $rootScope.eleves, function(eleve){
                    if( eleve._id == $routeParams.idEleve){
                        $scope.eleve= eleve;
                    }
                });         

      }
    ]
    
  });