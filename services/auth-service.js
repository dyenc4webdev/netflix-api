const AsyncWrapper = require('express-async-wrapper')
const { DefaultError, ValidationError } = require("../utils/apiError");
const User = require('../model/user')
const jwt = require('jsonwebtoken')
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
            //create a token and send to the user jwt.sign
            const token = jwt.sign(serializeUser(user), process.env.AUTH_SECRET)
            return {
                token,
                user: serializeUser(user)
            }
        }else{
            return null
        }

    }else {
        return null
    }
})
async function findByEmail(email){
    return User.findOne({email})
}
function serializeUser(user) {
	return {
		// id: user?._id,
		email: user?.email,
		firstName: user?.firstName,
		lastName: user?.lastName,
	};
}
module.exports = {
    register,
    login

}