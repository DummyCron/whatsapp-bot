// external packages
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var cron = require('node-cron');


// Start the webapp
const webApp = express();

// Webapp settings


webApp.use(express.json());

// Server Port
const PORT = process.env.PORT;

//middleware

// Home route
webApp.get('/whatsapp', (req, res) => {
    res.send(res.body);
});

const WA = require('./wati');

// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;
    // if (req.body.Body == "hi") {
    //     // cron.schedule('30 10 13 04 *', () => {
    //     //  WA.sendMessage('Hello from the other side.', senderID);
    //     // });
    //     await WA.sendMessage('Hello from the other side.', senderID);
    // }
    // else {
    //     await WA.sendMessage('Send msg again', senderID);
    // }
    console.log("body " + req.body.text)
    WA.sendTextMessage('Hello from the other side.', senderID);
    console.log(message);
    console.log(senderID);

    // Write a function to send message back to WhatsApp

    //console.log(req.body);

    // if (req.body.text == 'start') {
    //     //WA.sendTemplateMessage();

    //        await WA.sendTMessage(req.body.waId);
    //                 // WA.sendTMessage(req.body.waId);
    //     console.log(req.body);

    // }
    // if (req.body.text == "Let's get started") {
    //     let senderID = req.body.waId
    //     console.log(senderID)
    //     txt = `Did you know?
    //         💡As per a report by Stanford\’s Center for Education Policy Analysis, text message learning is remarkably accessible and effective! 🤯
    //         Ekatra helps institutions create, deploy, and assess text message-based micro-courses that dramatically improve learning and training. 🥳`
    //     file = 'C:/Users/acer/Downloads/Pic1.jpeg'
    //     url = "https://live-server-940.wati.io/api/file/showFile?fileName=data/images/b37ce56e-31d1-4d2f-bac8-ad4916857aa8.jpg&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDEwZGUxYy0wOTFiLTRlNGYtOGRjOS05ZmM2NGE4MGMyNzIiLCJ1bmlxdWVfbmFtZSI6InBkQHZydWtzaC5vcmciLCJuYW1laWQiOiJwZEB2cnVrc2gub3JnIiwiZW1haWwiOiJwZEB2cnVrc2gub3JnIiwiYXV0aF90aW1lIjoiMDEvMDYvMjAyMiAxMzozNzoxNSIsImRiX25hbWUiOiJ3YXRpTGl2ZTk0MCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOSVNUUkFUT1IiLCJleHAiOjI1MzQwMjMwMDgwMCwiaXNzIjoiQ2xhcmVfQUkiLCJhdWQiOiJDbGFyZV9BSSJ9.lxKf8i7Mi1pcoaiFJnHYK9GaBOWM6WpMCZbo4Pe-R8w"
    //     //await WA.sendMedia(file,senderID);
    //     btntxt = "Next"
    //     console.log(req.body)
    //     // console.log("Sent.. to " + senderID);


    //        // await WA.sendTextMessage(txt, senderID);
    //         await WA.sendWithMedia(btntxt, txt,url, senderID)

    //     // function two() {
    //     //     setTimeout(function () {

    //     //     }, 3000);

    //     // }

    //     // one(two)
    // }

    // if(req.body.text == "Next"){
    //     txt = `ekatra is one of the first edtech companies to have access to WhatsApp’s API & OpenAI’s GPT3, allowing us to deploy courses to over 1 billion WhatsApp users. 🙌`
    //     //WA.sendTextMessage()
    //     let senderID = req.body.waId

    //     setTimeout(function(){
    //         htxt = "Let's get started with your learning journey,"
    //         btxt = "Click here"
    //         btnTxt = "Learn with Ekatra!"
    //          WA.sendInteractiveButtonsMessage(htxt,btxt,btnTxt,senderID);
    // },3000);
    // }

    // if(req.body.text == "Select Course"){
    //     let senderID = req.body.waId
    //     txt = `⭐ Welcome, let's experience the power of micro-learning!
    //     You can choose to learn a topic through carefully curated content, spread over a few days.
    //     _Once you select a topic, you will need to complete it before you can start the next one!_` 


    //         await WA.sendTextMessage(txt, senderID);



    //         setTimeout(function () {
    //             WA.subjectMessage(senderID);

    //         }, 2000);


    // }

    console.log(req.body);



});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});