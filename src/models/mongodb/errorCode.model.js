
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { toJSON } = require('./plugins');

const Schema = new mongoose.Schema({
    code: {type: Number, required: true},
    description: {type: String, required: true },
}, { timestamps: true });
Schema.plugin(uniqueValidator);
Schema.plugin(toJSON);
const Model = mongoose.model('error_code', Schema)

module.exports = Model
