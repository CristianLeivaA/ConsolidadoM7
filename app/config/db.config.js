const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('db_bootcamp', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres'  // Puedes cambiar 'mysql' por 'postgres', 'sqlite', 'mssql', etc.
});

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

  
 module.exports = sequelize