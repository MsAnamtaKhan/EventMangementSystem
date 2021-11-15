const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    attendees: { type: Number, required: true },
    event_date: {type: Date, required: true},
    feedback_status: { type: String, default: 'Active' },
    daytime: {type: String, required: true},
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    service_id: { type: Schema.Types.ObjectId, ref: 'Services' },

}, {
    timestamps: true,
});
// Export Bio Model
var Events = mongoose.model('Events', eventsSchema)

module.exports = Events;