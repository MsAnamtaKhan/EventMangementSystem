const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    event_id: { type: Schema.Types.ObjectId, ref: 'Events' },
    card_no: { type: Number, required: true, minlength: 9},
    holder_name: {type: String, required: true},
    cvv: { type: Number, required: true, minlength: 3},
    amount: { type: Number, required: true},
    expiry_date: { type: Date, required: true},


}, {
    timestamps: true,
});

// Export Bio Model
var Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment;