const Flutterwave = require('flutterwave-node-v3')
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY)

const payment = async(details)=>{
//    "card_number":"5531886652142950",
//    "cvv":"564",
//    "expiry_month":"09",
//    "expiry_year":"32",
//    "currency":"NGN",
//    "amount":"100",
//    "fullname":"Yolande Aglaé Colbert",
//    "email":"stefan.wexler@hotmail.eu",
//    "tx_ref":"MC-3243e",
//    "redirect_url":"https://www.flutterwave.ng"
    const chargeBank = await flw.Charge.card(details)
    return chargeBank
}
module.exports = {
    payment,
}