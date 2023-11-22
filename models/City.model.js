const mongoose = require('mongoose');
const { REQUIRED_FIELD_ERROR } = require('../constants/errorMessages');

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR]
    },
    country: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR]
    },
    population: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR],
    },
    image: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR]
    },
    foundationYear: {
      type: Number,
      required: [true, REQUIRED_FIELD_ERROR]
    }
  },
  {
    timestamps: true // createdAt, updatedAt -> Date
  }
);

const City = mongoose.model('City', citySchema);

module.exports = City;