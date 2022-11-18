const router = require('express').Router()
const AsyncWrapper = require('express-async-wrapper')
const User = require('../model/user')

const {register} = require('../services/auth-service')
router.post('/register', AsyncWrapper(async (req,res)=>{
  const response = await register(req.body)
  // const newUser = new User(req.body)
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
router.get('/register', async(req, res)=>{
  res.render('movies',{
    pageTitle: "Registration"
  })
})
module.exports = router