const City = require('../models/City.model');

module.exports.getCities = (req, res, next) => {
  // Traerme de la base de datos todas las ciudades
  City.find()
    .then((cities) => {
      console.log(cities)
      res.render('cities', { cities });
    })
    .catch(err => console.error(err));
}

module.exports.getCityDetail = (req, res, next) => {
  const { id } = req.params;

  City.findById(id)
    .then(city => {
      res.render('city-detail', { city });
    })
    .catch(err => console.error(err));
}