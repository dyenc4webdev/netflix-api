const router = require('express').Router()
const AsyncWrapper = require('express-async-wrapper')
const User = require('../model/user')

const {register, login} = require('../services/auth-service')
router.post('/register', AsyncWrapper(async (req,res)=>{
  const response = await register(req.body)
  console.log(response);
  
  if(response){
    res.json({
      message: "User Created successfully",
      payload: response,
    })
    return;
  }
  res.status(500).json({message: "something went wrong"})
  
})
)
router.get('/login', async(req, res)=>{
  res.render('movies',{
    pageTitle: "Login"
  })
})
router.post("/login", AsyncWrapper( async(req, res)=>{
  /**
		 * accept request and send to login service
		 */
    const response = await login(req.body, req.header)
    try {
      if (response){
        res.json({
          message: "Successful login",
          payload: response
        })
      }
      return;
    } catch (error) {
      console.log(error);
    }
})
)
module.exports = router