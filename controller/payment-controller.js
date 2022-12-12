const { payment } = require("../services/payment-service");
const router = require('express').Router()

router.post('/payment', async(req, res)=>{
    const reqPayment = await payment(req.body)
    res.json({
        message: "paid successfully",
        payload: reqPayment
    })
})
module.exports = router