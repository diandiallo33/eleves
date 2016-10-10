'use strict';

angular.
module('core.eleve').
factory('ServiceEleve', function($resource) {
        return $resource('http://localhost:3000/eleves/:id', { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            },
            save: {
                method:"POST",
                isArray:false,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
            }
        });
   })
    .factory('factoryEleve', ['$http', function ($http) {

        var factoryEleve={};
        var eleves={};
        var urlServeur="http://localhost:3000/eleves";


        factoryEleve.listeEleves = function () {
            return $http.get(urlServeur);
        };
        
        factoryEleve.ajouterEleve= function (eleve) {

            $http({
                method : "POST",
                url : "http://localhost:3000/eleves/ajouter",
                data: eleve,
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function (response) {
            }, function (erreur) {
                console.log(erreur);
            });
            
        }

        factoryEleve.supprimerEleve= function (eleve) {

            $http({
                method : "POST",
                url : "http://localhost:3000/eleves/supprimer",
                data: eleve,
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function (response) {
            }, function (erreur) {
                console.log(erreur);
            });

        }

        factoryEleve.modifierEleve= function (eleve) {
            return $http({
                method : "POST",
                url : "http://localhost:3000/eleves/modifier",
                data: eleve,
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            });
        }

        factoryEleve.setEleves= function(donnees){
             eleves=donnees;
        }

        factoryEleve.getEleves= function(){
            return eleves;
        }
        return factoryEleve;
    }
    ])
;


