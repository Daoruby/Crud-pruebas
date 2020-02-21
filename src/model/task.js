const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	vehModelo: String,
	matricula: Number,
    vehTipo: String,
    fecCompra: Date,
    codPer: Array,
    camModelo: Array,
    camCVision: Number,
    camFps: Number,
    camPrecio: Number,
    caracteristicas: Array,
    tramo: Array,
    inicioTramo: Date,
    finalizado: {
        type: Boolean,
    },
    numCap: Number,
    fechaCaptura: Date,
    ubicacion: {
        coordinates : Array,
        type : String
    }
},{ collection: 'capturas' });

module.exports = mongoose.model('capturas', TaskSchema);