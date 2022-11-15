const AsyncWrapper = require('express-async-wrapper')
const { DefaultError, ValidationError } = require("../utils/apiError");
const User = require('../model/user')
const register =  AsyncWrapper(async(payload)=>{
    const user = await findByEmail(payload.email)
    
    if(user){
        throw new ValidationError();
    }
    try {
        const newUser = await user(payload)
        return newUser.save()
    } catch (error) {   
        throw new DefaultError()
        
    }
})
const login = AsyncWrapper(async(payload)=>{
    const {email, password} = payload
    const user = await findByEmail(email)

    if(user){
        if(user.password === password){
            
        }
    }
})
async function findByEmail(email){
    return User.findOne({email})
}
module.exports = {
    register,

}