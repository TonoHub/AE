/**
 * Created by tono on 11/04/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
    nombre: String,
    apellido: String,
    edad: Number
});