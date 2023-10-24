const loginBusiness = require('../business/loginBusiness')
// Example controller function
exports.login = async (req, res) => {
  console.log(req.body)
  try{
    const responseBusiness = await loginBusiness.loginBusiness(req.body)
    return res.status(201).json(responseBusiness);
  }catch(error){
    return res.status(500).json({ error: 'Error creating login entry' });

  }
};
