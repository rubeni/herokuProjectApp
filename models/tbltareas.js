module.exports = function(sequelize, DataTypes){
  return sequelize.define('Tbltareas', {
  nombre: DataTypes.STRING,
  etiquetas: DataTypes.STRING,
  porcentaje: DataTypes.INTEGER
  });
}
