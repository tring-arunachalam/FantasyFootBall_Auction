const express = require('express');
const router = express.Router();
const {register,login,createAuction,userdata,currentauction,upcomingauction,historyauction}= require("./Controller")

const registerroute=router.post('/',register );
const loginroute=router.post('/user', login);
const auctionroute=router.post("/auction",createAuction)
const userdataroute=router.get("/userdetails/:email_id",userdata)
const currentauctionroute=router.get("/currentauction/:email_id",currentauction)
const upcomingauctionroute=router.get("/upcomingauction/:email_id",upcomingauction)
const historyauctionroute=router.get("/historyauction/:email_id",historyauction)
module.exports = {
    registerroute,
    loginroute,
    auctionroute,
    userdataroute,
    currentauctionroute,
    upcomingauctionroute,
    historyauctionroute
}