var path = require('path');

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = (url[6]||null);
var user     = (url[2]||null);
var pwd      = (url[3]||null);
var protocol = (url[1]||null);
var dialect  = (url[1]||null);
var port     = (url[5]||null);
var host     = (url[4]||null);
var storage  = process.env.DATABASE_STORAGE;

// Cargar el modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite en desarrollo o Postgres en explotacion
var sequelize = new Sequelize(DB_name, user, pwd,
  { dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    storage:  storage,  // solo SQLite (.env)
    omitNull: true      // solo Postgres
  }
);
//Importación al objeto sequelize la tabla a Tbltareas que esta en tbltareas.js
var Tbltareas = sequelize.import(path.join(__dirname,'tbltareas'));
//Exportar definición de la tabla Tbltareas, para usarlo en otros lugares de la app
exports.Tbltareas = Tbltareas;

//Sincronizando modelo definido con la BBDD podemos inicializarla
sequelize.sync().then(function() {
	Tbltareas.count().then(function (count){
		if (count === 0) {
			Tbltareas.create({nombre: 'Reunión con cliente',
					   etiquetas: 'Node, Fechas',
						 porcentaje: 15
			});
      Tbltareas.create({nombre: 'Desarrollo del mockup',
      			 etiquetas: 'Node, Mockup, Diseño',
      			 porcentaje: 50
			});
      Tbltareas.create({nombre: 'Generar repositorio Git',
      			 etiquetas: 'Node, Versiones',
      			 porcentaje: 100
			});
			//.then(function(){console.log('Base de datos inicializada')}); //no funciona con el then
		};
	});
});
