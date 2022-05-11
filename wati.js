var request = require('request');
var fs = require('fs');


const sendTMessage = async (senderID) => {

  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendTemplateMessage/' + senderID,
    'headers': {

      'Authorization': process.env.API,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "template_name": "test_course",
      "broadcast_name": "string",
      body: JSON.stringify({
        "template_name": "course_day_temp",
        "broadcast_name": "order_update",
        "parameters": "[{'name':'1', 'value':'John'}, {'name':'2', 'value':'{{name}}'}, {'name':'3', 'value':'12345'}]"
      })
    })

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });


};

//CSV

const sendTemplateMessage = async (message, senderID) => {

  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendTemplateMessageCSV?template_name=test_course&broadcast_name=string',
    'headers': {
      'Authorization': process.env.API,
      'Cookie': 'affinity=1642395252.901.162574.768244'
    },
    formData: {
      'whatsapp_numbers_csv': {
        'value': fs.createReadStream('C:/Users/acer/Downloads/File.xlsx'),
        'options': {
          'filename': 'C:/Users/acer/Downloads/File.xlsx',
          'contentType': null
        }
      }
    }
  };
  request(options, function (error, response) {

    if (error) throw new Error(error);
    console.log(response.body);
  });

};

const sendTextMessage = async (message, senderID) => {


  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendSessionMessage/918779171731',
    'headers': {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZDYxOGY1OC00NDgwLTQzMWEtOTRkZC03ZDM1ZTBlMTU0ZDIiLCJ1bmlxdWVfbmFtZSI6InRlY2hAZWthdHJhLm9uZSIsIm5hbWVpZCI6InRlY2hAZWthdHJhLm9uZSIsImVtYWlsIjoidGVjaEBla2F0cmEub25lIiwiYXV0aF90aW1lIjoiMDQvMTEvMjAyMiAwNTowNjo0OCIsImRiX25hbWUiOiI4MDc2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU5JU1RSQVRPUiIsImV4cCI6MjUzNDAyMzAwODAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.4_TPxmu6ZA5fCOLSkRXPjYUeyMsiBaDuDHOlwTlTvqs',
      'Cookie': 'affinity=1652270357.966.209150.509171|2467eaaf3d5a2ee4340dd8c1feb2a538'
    },
    formData: {
      'messageText': message
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });


}

//Send Media
const sendMedia = async (file, senderID) => {
  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendSessionFile/' + senderID,
    'headers': {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZDk3YTc1ZC00ODczLTQzZjItOTE1Ny0zM2E3NjU3OWE2NDEiLCJ1bmlxdWVfbmFtZSI6InRlY2hAZWthdHJhLm9uZSIsIm5hbWVpZCI6InRlY2hAZWthdHJhLm9uZSIsImVtYWlsIjoidGVjaEBla2F0cmEub25lIiwiYXV0aF90aW1lIjoiMDUvMDQvMjAyMiAxMjozMDo0MiIsImRiX25hbWUiOiI4MDc2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU5JU1RSQVRPUiIsImV4cCI6MjUzNDAyMzAwODAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.V8ZaAAAjMA2Q_2N4fNFHUn7 - JE9SfeDY7eCGh2OBMp8",
      'Cookie': 'affinity=1642574596.568.162574.765542'
    },
    formData: {
      'file': {
        'value': fs.createReadStream(file),
        'options': {
          'filename': '/C:/Users/acer/Downloads/Pic1.jpeg',
          'contentType': null
        }
      }
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

}

//Send Interactive Button Message only text
const sendInteractiveButtonsMessage = async (hTxt, bTxt, btnTxt, senderID) => {
  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendInteractiveButtonsMessage?whatsappNumber=' + senderID,
    'headers': {
      'Authorization': process.env.API,
      'Content-Type': 'application/json',
      'Cookie': 'affinity=1642574596.568.162574.765542'
    },
    body: JSON.stringify({
      "header": {
        "type": "Text",
        "text": hTxt
      },
      "body": bTxt,
      "buttons": [
        {
          "text": btnTxt
        }
      ]
    })

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

//Send Interactive Button Message with media
const sendWithMedia = async (btntxt, Btxt, url, senderID) => {
  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendInteractiveButtonsMessage?whatsappNumber=' + senderID,
    'headers': {
      'Authorization': process.env.API,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "header": {
        "type": "Image",
        "media": {
          "url": url
        }
      },
      "body": Btxt,
      "buttons": [
        {
          "text": btntxt
        }
      ]
    })

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

}

const subjectMessage = async (senderID) => {
  var options = {
    'method': 'POST',
    'url': 'https://live-server-8076.wati.io/api/v1/sendInteractiveButtonsMessage?whatsappNumber=' + senderID,
    'headers': {
      'Authorization': process.env.API,
      'Content-Type': 'application/json',
      'Cookie': 'affinity=1642595772.742.162574.170076'
    },
    body: JSON.stringify({
      "header": {
        "type": "Text",
        "text": "Select Course"
      },
      "body": "Which of these topics would you like to get started with? ",
      "buttons": [
        {
          "text": "Entrepreneurship "
        },
        {
          "text": "Climate Change "
        },
        {
          "text": "UN SDGs "
        }
      ]
    })

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

}



module.exports = {
  sendTemplateMessage,
  sendTextMessage,
  sendTMessage,
  sendMedia,
  sendInteractiveButtonsMessage,
  subjectMessage,
  sendWithMedia
}

// var options = {
  //     'method': 'POST',
  //     'url': 'https://live-server-8076.wati.io/api/v1/sendInteractiveButtonsMessage?whatsappNumber=918779171731',
  //    // 'url': 'https://live-server-8076.wati.io/api/v1/sendInteractiveButtonsMessage?whatsappNumber='+senderID,

  //     'headers': {
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDEwZGUxYy0wOTFiLTRlNGYtOGRjOS05ZmM2NGE4MGMyNzIiLCJ1bmlxdWVfbmFtZSI6InBkQHZydWtzaC5vcmciLCJuYW1laWQiOiJwZEB2cnVrc2gub3JnIiwiZW1haWwiOiJwZEB2cnVrc2gub3JnIiwiYXV0aF90aW1lIjoiMDEvMDYvMjAyMiAxMzozNzoxNSIsImRiX25hbWUiOiJ3YXRpTGl2ZTk0MCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOSVNUUkFUT1IiLCJleHAiOjI1MzQwMjMwMDgwMCwiaXNzIjoiQ2xhcmVfQUkiLCJhdWQiOiJDbGFyZV9BSSJ9.lxKf8i7Mi1pcoaiFJnHYK9GaBOWM6WpMCZbo4Pe-R8w',
  //       'Content-Type': 'application/json',
  //       'Cookie': 'affinity=1642228187.197.162575.599329'
  //     },
  //     body: JSON.stringify({
  //       "header": {
  //         "type": "Text",
  //         "text": "string"
  //       },
  //       "body": "string",
  //       "footer": "string",
  //       "buttons": [
  //         {
  //           "text": "string"
  //         }
  //       ]
  //     })

  //   };
  //   request(options, function (error, response) {
  //     if (error) throw new Error(error);
  //     console.log(response.body);
  //   });