// Require:
var postmark = require("postmark");

// Instantiate client using Netlify env
const token = process.env.POSTMARK;

var client = new postmark.Client(token);

// Send an email:
exports.handler = async (event, context) => {


// Grab form submission payload
  let payload = JSON.parse(event.body).payload;
  
  let name = JSON.stringify(payload.human_fields.name);
  let email = JSON.stringify(payload.human_fields.email);
  let message = JSON.stringify(payload.human_fields.message);
  let timeline = JSON.stringify(payload.human_fields.timeline);
  let budget = JSON.stringify(payload.human_fields.budget);


  try {
    client.sendEmail({
  "From": process.env.FROM_ADDRESS,
  "To": process.env.TO_ADDRESS,
  "Subject": "Test",
  "TextBody": "Name : " + name + ", email : " + email
});
    return {
      statusCode: 200,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}