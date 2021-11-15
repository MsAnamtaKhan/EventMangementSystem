const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    service_name: { type: String, required: true, trim: true,},
    service_price: { type: Number, required: true, trim: true,},
}, {
    timestamps: true,
});

// Export Bio Model
var Services = mongoose.model('Services', servicesSchema)
module.exports = Services;