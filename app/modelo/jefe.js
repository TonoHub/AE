/**
 * Created by tono on 13/04/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Boss', {
    nombre: String,
    empleado: String,
    edad: Number
});