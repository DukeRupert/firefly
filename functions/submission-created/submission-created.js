const postmark = require('postmark');
const client = new postmark.ServerClient(process.env.POSTMARK)

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    client.sendEmail({
      "From": process.env.FROM_ADDRESS,
      "To": process.env.TO_ADDRESS,
      "Subject": "Test",
      "TextBody": "Hello from Postmark!"
  });
    return {
      statusCode: 200,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
