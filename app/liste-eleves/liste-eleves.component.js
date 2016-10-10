'use strict';

angular.
  module('listeEleves').
  component('listeEleves', {
    templateUrl: 'liste-eleves/liste-eleves.template.html',
    controller: ['ServiceEleve','$rootScope','$scope', 'factoryEleve',
      function ListeElevesController(ServiceEleve,$rootScope, $scope, factoryEleve) {

          ServiceEleve.query().$promise.then( function(data){
             $rootScope.eleves= data;
          });

       /*   factoryEleve.listeEleves().then(function (reponse) {
              $rootScope.eleves= reponse.data;
              console.log(reponse.data);
          });
        */

          var index; var eleveSupp={};
          $scope.supprimer= function(eleve){
              index= $rootScope.eleves.indexOf(eleve);
              eleveSupp=eleve;

          }

          $scope.confirmer= function(){

               factoryEleve.supprimerEleve(eleveSupp);
               $rootScope.eleves.splice(index,1);

          }

      }
    ]
    
  }).
directive('confirmSupp', function () {

        return {
            restrict: 'EA',
            link: function (scope, element, attrs){

                $('.suppReussie').css({'display':'none'});
                $(element).click( function(){

                    $('.boiteSupp').css({'display':'block'});
                    $('.bloquer').css({'display':'block'});
                });

                $('.non').click( function(){
                    $('.boiteSupp').css({'display':'none'});
                    $('.bloquer').css({'display':'none'});
                });

                $('.oui').click( function(){
                    $('.boiteSupp').css({'display':'none'});
                    $('.suppReussie').css({'display':'block'});
                    $('.bloquer').css({'display':'none'});
                });


            }
        }
    }
)
;