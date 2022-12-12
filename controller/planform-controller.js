// const { getBanks } = require("../services/planform-service");
const router = require('express').Router()
const Flutterwave = require('flutterwave-node-v3')
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY)
const getBanks = async (payload) => {

    try {
        const payload = {
            
            "country":"NG" //Pass either NG, GH, KE, UG, ZA or TZ to get list of banks in Nigeria, Ghana, Kenya, Uganda, South Africa or Tanzania respectively
            
        }
        const response = await flw.Bank.country(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}

router.get("/banks", async  (req, res)=>{
    // const banks = await getBanks()
    try {
        const payload = {
            
            "country":"NG" //Pass either NG, GH, KE, UG, ZA or TZ to get list of banks in Nigeria, Ghana, Kenya, Uganda, South Africa or Tanzania respectively
            
        }
        const response = await flw.Bank.country(payload)
        // const r = await flw.Charge.card()
        console.log(response);
        res.json({
            banks: response
        })
    return banks
    } catch (error) {
        console.log(error)
    }
    // return banks
    
})
module.exports = router