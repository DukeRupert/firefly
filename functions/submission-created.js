// Require:
var postmark = require("postmark");

// Instantiate client using Netlify env
const token = process.env.POSTMARK;

var client = new postmark.Client(token);

// Send an email:
exports.handler = async (event, context) => {


// Grab form submission payload
  let payload = JSON.parse(event.body).payload;
  let myJSON = JSON.stringify(payload.human_fields);

  try {
    client.sendEmail({
  "From": "firefly@loganwilliams.tech",
  "To": "firefly@loganwilliams.tech",
  "Subject": "Test",
  "TextBody": myJSON,
});
    return {
      statusCode: 200,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}