const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	mail: { type: String, unique: true },
	username: { type: string },
	password: { type: string },
});

module.exports = mongoose.model('user', userSchema);
