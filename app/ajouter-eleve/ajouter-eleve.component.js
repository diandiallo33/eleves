'use strict';

angular.
  module('ajouterEleve').
  component('ajouterEleve', {
    templateUrl: 'ajouter-eleve/ajouter-eleve.template.html',
    controller: ['$rootScope','$scope', 'ServiceEleve', 'factoryEleve',
      function AjouterEleveController($rootScope,$scope, ServiceEleve, factoryEleve) {
          $scope.nouvel={};
           $scope.ajouterEleve = function ajouterEleve(nouvel) {

               factoryEleve.ajouterEleve(nouvel);
               $rootScope.eleves.push(nouvel);

               $scope.nouvel={};
          };
        
      }
    ]
    
  }).
    directive('ajoutPopup', function () {

        return {
            restrict: 'EA',
            link: function (scope, element, attrs){

                element.css({'position':'fixed', 'left':'350px', 'top':'150px', 'minWidth':'500px', 'backgroundColor':'#deebf7', 'zIndex':'9999'});

                $('.ajouter').click( function(){
                    element.css({'display':'block'});
                    $('.bloquer').css({'display':'block'});
                   ;
                });

                $('.fermer').click( function(){
                    element.css({'display':'none'});
                    $('.bloquer').css({'display':'none'});
                });


            }
        }
    }
)
;