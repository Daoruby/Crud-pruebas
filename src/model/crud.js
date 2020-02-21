const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskCrud = Schema({
  codigo: String,
  nombre: String,
  especialidad: String,
  fechaNacimiento: Date,
  sueldo: Number,
},{ collection: 'trabajadores' });

module.exports = mongoose.model('trabajadores', TaskCrud);
