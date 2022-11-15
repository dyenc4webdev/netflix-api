const router = require('express').Router()
const AsyncWrapper = require('express-async-wrapper')

const user = require('../model/user')
const {register} = require('../services/auth-service')
router.post('/register', AsyncWrapper( async (req,res)=>{
  const response = await register(req.body)
  if(response){
    res.json({response})
    return;
  }
  res.status(500).json({message: "not found"})

})
)
module.exports = router