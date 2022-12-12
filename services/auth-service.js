const AsyncWrapper = require('express-async-wrapper')
const { DefaultError, AuthenticationError } = require("../utils/apiError");
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const register =  async(payload)=>{
    const user = await findByEmail(payload.email)
    const email = payload.email
    const password = payload.password
     
    if(user){
        throw new AuthenticationError();
    }
    try {
        const harshedPwd = await bcrypt.hash(password, 12)
        // const newUser = await User(payload)
        const newUser = await User({
            email: email,
            password: harshedPwd,
            myList: {moviesList: []}
        })
        return newUser.save()
    } catch (error) {   
        throw new DefaultError()
    }
}
const login = async(payload)=>{
    const {email, password} = payload
    const user = await findByEmail(email)
    const comparedPwd = await bcrypt.compare(password, user.password)
    if(user){
        // if(user.password === password){
        if(comparedPwd){
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
}
async function findByEmail(email){
    return User.findOne({email})
}
function serializeUser(user) {
	return {
		id: user?._id,
		email: user?.email,
		password: user?.password,
	};
}
module.exports = {
    register,
    login

}