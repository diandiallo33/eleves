'use strict';

angular.
  module('modifierEleve').
  component('modifierEleve', {
    templateUrl: 'modifier-eleve/modifier-eleve.template.html',
    controller: ['$rootScope','$scope','$routeParams','factoryEleve','$location',
      function ModifierEleveController($rootScope,$scope,$routeParams,factoryEleve,$location) {

        var copie={}, index;
        var eleves=angular.copy($rootScope.eleves);
        angular.forEach( eleves, function(eleve){
                    if( eleve._id == $routeParams.idEleve){
                        $scope.eleve= eleve;
                        copie=angular.copy(eleve);
                        index=eleves.indexOf(eleve);
                    }
                });

          $scope.annuler= function(){
              $scope.eleve=angular.copy(copie);
          }

          $scope.modifier= function(eleve){

              factoryEleve.modifierEleve(eleve).success(function (data) {
                  console.log(factoryEleve.getEleves());
                  $rootScope.eleves.splice(index,1, angular.copy(eleve));
                  angular.copy($scope.eleve, copie );
                  $location.url('/eleves');
              });

          }
      }
    ]
    
  }).
directive('confirmModif', function () {

        return {
            restrict: 'EA',
            link: function (scope, element, attrs){

                $(element).click( function(){

                    $('.boiteModif').css({'display':'block'});
                    $('.bloquer').css({'display':'block'});
                });

                $('.non').click( function(){
                    $('.boiteModif').css({'display':'none'});
                    $('.bloquer').css({'display':'none'});
                });

                $('.oui').click( function(){
                    $('.boiteModif').css({'display':'none'});
                    $('.bloquer').css({'display':'none'});
                });


            }
        }
    }
)


;