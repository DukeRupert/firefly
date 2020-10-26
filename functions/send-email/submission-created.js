// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

// Require:
var postmark = require("postmark");

// Instantiate client using Netlify env
var client = new postmark.Client(process.env.POSTMARK);

// Send an email:
exports.handler = async (event, context) => {

  // Grab form submission payload
  let payload = JSON.parse(event.body).payload;

  try {
    client.sendEmail({
  "From": "firefly@loganwilliams.tech",
  "To": "firefly@loganwilliams.tech",
  "Subject": "Test",
  "TextBody": payload
});
    return {
      statusCode: 200,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

