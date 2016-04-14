/**
 * Created by tono on 13/04/2016.
 */

angular.module('MainApp', [])

function bossController($scope, $http) {
    $scope.newJefe = {};
    $scope.jefes = {};
    $scope.selected = false;
    $scope.err = '';
    $scope.testy = 5;
    

$scope.cleanall = function(){
    $scope.newJefe = {};
    $scope.err = "";
};

// Obtenemos todos los datos de la base de datos de los jefes
$http.get('/api/jefe').success(function(data) {
        $scope.jefes = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

// Función para registrar a un jefe
$scope.registrarJefe = function(res) {
    
        $http.post('/api/jefe', $scope.newJefe)
            .success(function (data) {
                $scope.cleanall(); // Borramos los datos del formulario
                $scope.jefes = data;
            })
            .error(function (data) {
                $scope.cleanall(); // Borramos los datos del formulario
                $scope.err = "Edad debe ser un número";
                //console.log('Error: ' + data);
            });
    
};

// Función para editar los datos de un jefe
$scope.modificarJefe = function(newJefe) {
    $http.put('/api/jefe/' + $scope.newJefe._id, $scope.newJefe)
        .success(function(data) {
            $scope.cleanall(); // Borramos los datos del formulario
            $scope.jefes = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
};

// Función que borra un objeto jefe conocido su id
$scope.borrarJefe = function(newJefe) {
    $http.delete('/api/jefe/' + $scope.newJefe._id)
        .success(function(data) {
            $scope.cleanall();
            $scope.jefes = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
};

// Función para coger el objeto jefe seleccionado en la tabla
$scope.selectBoss = function(jefe) {
    $scope.newJefe = jefe;
    $scope.selected = true;
    console.log($scope.newJefe, $scope.selected);
};
}
