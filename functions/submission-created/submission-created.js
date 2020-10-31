const postmark = require('postmark');

const sendThankYouEmail = async ({ email }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');
    const client = new postmark.ServerClient(process.env.POSTMARK);
    console.log('Client instantiated')

    const mailData = {
      "From": process.env.FROM_ADDRESS,
      "To": process.env.TO_ADDRESS,
      "Subject": "Test Netlify Dev",
      "TextBody": "Hello from Postmark!"
    };
    console.log(JSON.stringify(mailData));

    client.sendEmail(mailData, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};

exports.handler = async event => {
  try {
    const data = JSON.parse(event.body);
    let reply;
    
    await sendThankYouEmail(data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent from production successfully"
      })
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message
    };
  }
};