const loginService = require('../services/loginService')
exports.loginBusiness = async (req) => {
    const {username,password} = req;
    try{
        const response = await loginService.createUser({username,password});
        return response;
    }catch(error){
        throw error;
    }
    
}