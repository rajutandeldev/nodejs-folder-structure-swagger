// Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Login = mongoose.model('Login', taskSchema);

module.exports = Login;
