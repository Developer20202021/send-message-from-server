const express = require('express');
const Vonage = require('@vonage/server-sdk');
const app = express();


const vonage = new Vonage({
    apiKey: "f772386e",
    apiSecret: "wfv3OFDTBQZMGRiU"
  })



const sendMessage = (toNumber)=>{
const from = "Vonage APIs";
const to = toNumber;
const text = 'My name is Mahadi Hasan'

    vonage.message.sendSms(from, to, text, (err, res)=>{
        if(err){
            console.log(err);
        }
        else{
            if(res.messages[0]['status'] === "0"){
                console.log('Message sent successfully.');
            }
            else{
                console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
            }
        }
    
    })

}




setInterval(()=>{
sendMessage('8801721915550')
},10000)












app.listen(5000,()=>{
    console.log('Server is running in 5000');
})
