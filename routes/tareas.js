var express = require('express');
var router = express.Router();

var models = require('../models/models.js');

/* GET tareas page. */
router.get('/', function(req,res,next) {
 //res.render('tareas_lista', { title: 'Tareas List/Index', tareas: tareas});
	//findAll devuelve un array con el contenido de la BBDD
	models.Tbltareas.findAll().then(
				function(tbltareas) {
					for (var i = 0; i < tbltareas.length; i++) {
              var arrEtiquetas = tbltareas[i].etiquetas.split(',');
              tbltareas[i].etiquetas = arrEtiquetas;
          }
					res.render('tareas_lista', { tareas: tbltareas, errors: []});
	}).catch(function(error)
		{ console.log("Error");
		})
});
module.exports = router;
