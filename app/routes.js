/**
 * Created by tono on 11/04/2016.
 */
var Persona = require('./modelo/persona');
var Jefe = require('./modelo/jefe');
var Controller = require ('./controller');

module.exports = function(app) {

    // devolver todos los Personas
    app.get('/api/persona', Controller.getPersona);
    // Crear una nueva Persona
    app.post('/api/persona', Controller.setPersona);
    // Modificar los datos de una Persona
    app.put('/api/persona/:persona_id', Controller.updatePersona);
    // Borrar una Persona
    app.delete('/api/persona/:persona_id', Controller.removePersona);
    // devolver todos los Jefes
    app.get('/api/jefe', Controller.getJefe);
    // Crear un nuevo Jefe
    app.post('/api/jefe', Controller.setJefe);
    // Modificar los datos de un Jefe
    app.put('/api/jefe/:jefe_id', Controller.updateJefe);
    // Borrar un Jefe
    app.delete('/api/jefe/:jefe_id', Controller.removeJefe);
    // application 
    app.get('*', function(req, res) {
        res.sendfile('./angular/index.html'); // Carga única de la vista
    });
};