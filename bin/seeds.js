const mongoose = require('mongoose');
const City = require('../models/City.model');
const citiesData = require('../constants/citiesData');

// Conectarnos a la base de datos
require('../config/db.config');

mongoose.connection.once('connected', () => {
  console.log('Seeds connected to DB');

  // Borrar todo lo que hubiese antes
  mongoose.connection.dropDatabase()
    .then(() => {
      console.log('DB has been cleared');
    })
    .then(() => {
      // Crear los documentos en la base de datos a partir del modelo
      return City.create(citiesData)
    })
    .then((citiesDB) => {
      // Log de los documentos que se crean
      citiesDB.forEach(city => console.log(city))
    })
    .catch(err => console.error(err))
    .finally(() => {
      // Cerrar la conexión y parar la ejecución del script
      mongoose.connection.close()
        .then(() => {
          console.log('End of seeds');
        })
        .catch(err => console.error(err))
        .finally(() => {
          process.exit(0)
        })
    })
})
