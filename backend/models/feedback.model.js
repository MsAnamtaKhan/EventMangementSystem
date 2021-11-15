const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    event_id: { type: Schema.Types.ObjectId, ref: 'Events' },
    question_one: { type: String, required: true, trim: true},
    question_two: { type: String, required: true, trim: true},
    question_three: { type: String, required: true, trim: true},
    question_four: { type: String, required: true, trim: true},
    question_five: { type: String, required: true, trim: true},

}, {
    timestamps: true,
});

// Export Bio Model
var Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback;