const Login = require('../../models/Login');

exports.createUser = async (userData) => {
  return Login.create(userData).catch(error=>{throw error});
}