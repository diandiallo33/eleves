'use strict';

angular.
  module('supprimerEleve').
  component('supprimerEleve', {
    templateUrl: 'supprimer-eleve/supprimer-eleve.template.html',
    controller: ['$rootScope','$routeParams',
      function SuprrimerEleveController($rootScope,$routeParams) {

          angular.forEach( $rootScope.eleves, function(eleve){
              if( eleve.tel == $routeParams.idEleve){
                  var index= $rootScope.eleves.indexOf(eleve);
                  //$rootScope.eleves.splice(index,1);
              }
          });

      }
    ]
    
  })
;