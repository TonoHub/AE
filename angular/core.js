/**
 * Created by tono on 11/04/2016.
 */
angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.compass = "";
    $scope.selected = false;
    $scope.err = '';

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/persona').success(function (data) {
            $scope.personas = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una persona
    $scope.registrarPersona = function (res) {
        if ($scope.compass != $scope.newPersona.apellido) {
            $scope.err = "La contraseña y la comprobación no coinciden";
        }
        else {
            $http.post('/api/persona', $scope.newPersona)
                .success(function (data) {
                    $scope.cleanall(); // Borramos los datos del formulario
                    $scope.personas = data;
                })
                .error(function (data) {
                    $scope.cleanall(); // Borramos los datos del formulario
                    $scope.err = "Edad debe ser un número";
                    //console.log('Error: ' + data);
                });
        }
    };

    // Función para editar los datos de una persona
    $scope.modificarPersona = function (newPersona) {
        $http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
            .success(function (data) {
                $scope.cleanall(); // Borramos los datos del formulario
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto persona conocido su id
    $scope.borrarPersona = function (newPersona) {
        $http.delete('/api/persona/' + $scope.newPersona._id)
            .success(function (data) {
                $scope.cleanall();
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectPerson = function (persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };

    $scope.cleanall = function () {
        $scope.newPersona = {};
        $scope.compass = "";
        $scope.err = "";
    };

}