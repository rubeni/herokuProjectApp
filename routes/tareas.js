var express = require('express');
var router = express.Router();

//array de tareas
var tareas = [
	{
		"nom":"Diseño wireframe",
		"etiquetes": [ "wireframe","app","hibrida"],
		"realitzacio":"36"
	},
	{
		"nom":"Reunión",
		"etiquetes": ["app","hibrida"],
		"realitzacio":"88"
	},
	{
		"nom":"Desarrollo Layout",
		"etiquetes": [ "layout","app","hibrida"],
		"realitzacio":"25"
	},
	{
		"nom":"Reunión cliente",
		"etiquetes": [ "reunión","app","hibrida"],
		"realitzacio":"40"
	}
]

/* GET tareas page. */
router.get('/', function(req,res,next) {
 res.render('tareas_lista', { title: 'Tareas List/Index', tareas: tareas});
});

/* GET new tareas page. */
router.get('/new', function(req,res,next) {
 res.render('tareas_new', { title: 'TareasNew' });
});

/* GET crear tareas page. */
router.post('/crear', function(req,res,next) {
    var name = req.body.nombre;
    var etiquetas = req.body.tags;
    var progreso = req.body.percent;

    etiquetas = etiquetas.split(',');

    var nuevaTarea = {
      nom: name,
      etiquetes: etiquetas,
      realitzacio: progreso
    };

    tareas.push(nuevaTarea);
    res.redirect('/tareas');
});

module.exports = router;
