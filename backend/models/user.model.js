const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Active' },
    username: { type: String, required: true, trim: true, minlength: 4 , unique:true},
    password: { type: String, required: true },
    type: { type: String, required: true, default: 'Customer' },
    created_at: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

// Export Bio Model
var User = mongoose.model('User', userSchema)
module.exports = User; 