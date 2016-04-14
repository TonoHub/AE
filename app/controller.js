/**
 * Created by tono on 11/04/2016.
 */
var Persona = require('./modelo/persona');

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
    Persona.find(
        function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona); // devuelve todas las Personas en JSON		
        }
    );
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res, err) {
    if (isNaN(req.body.edad))
    {
        return res.send(err);
    }
    // Creo el objeto Persona
    Persona.create(
        {nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad},
        function(err, persona) {
            if (err)
                res.send(err);
            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });

}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
    Persona.update( {_id : req.params.persona_id},
        {$set:{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}},
        function(err, persona) {
            if (err)
                res.send(err);
            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });
}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
    Persona.remove({_id : req.params.persona_id}, function(err, persona) {
        if (err)
            res.send(err);
        // Obtine y devuelve todas las personas tras borrar una de ellas
        Persona.find(function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona);
        });
    });
}

var Jefe = require('./modelo/jefe');

// Obtiene todos los objetos Jefe de la base de datos
exports.getJefe = function (req, res){
    Jefe.find(
        function(err, jefe) {
            if (err)
                res.send(err)
            res.json(jefe); // devuelve todos los Jefes en JSON		
        }
    );
}

// Guarda un objeto Jefe en base de datos
exports.setJefe = function(req, res, err) {
    if (isNaN(req.body.edad))
    {
        return res.send(err);
    }
    // Creo el objeto Jefe
    Jefe.create(
        {nombre : req.body.nombre,empleado: req.body.empleado, edad: req.body.edad},
        function(err, jefe) {
            if (err)
                res.send(err);
            // Obtine y devuelve todos los jefes tras crear uno de ellos
            Jefe.find(function(err, jefe) {
                if (err)
                    res.send(err)
                res.json(jefe);
            });
        });

}

// Modificamos un objeto Jefe de la base de datos
exports.updateJefe = function(req, res){
    Jefe.update( {_id : req.params.jefe_id},
        {$set:{nombre : req.body.nombre,empleado: req.body.empleado, edad: req.body.edad}},
        function(err, jefe) {
            if (err)
                res.send(err);
            // Obtine y devuelve todos los jefes tras crear una de ellas
            Jefe.find(function(err, jefe) {
                if (err)
                    res.send(err)
                res.json(jefe);
            });
        });
}

// Elimino un objeto Jefe de la base de Datos
exports.removeJefe = function(req, res) {
    Jefe.remove({_id : req.params.jefe_id}, function(err, jefe) {
        if (err)
            res.send(err);
        // Obtine y devuelve todos los jefes tras borrar una de ellas
        Jefe.find(function(err, jefe) {
            if (err)
                res.send(err)
            res.json(jefe);
        });
    });
}