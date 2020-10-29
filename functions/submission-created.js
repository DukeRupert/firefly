// Require:
var postmark = require("postmark");

// Declare env variables
const token = process.env.POSTMARK;
const from = process.env.FROM_ADDRESS;
const to = process.env.TO_ADDRESS;

var client = new postmark.Client(token);

// Send an email:
exports.handler = async (event, context) => {

  console.log('submission created error testing');
  let date = new Date();
  let body = ''

// Grab form submission payload
  
  let payload = JSON.parse(event.body).payload;

  for (const [key, value] of Object.entries(payload.human_fields)) {
    console.log(`${key}: ${value}`);
    let text = JSON.stringify(`${key}: ${value}`);
    body += text + "\n";
  }
  
  // Send the email
  try {
    client.sendEmail({
  "From": from,
  "To": to,
  "Subject": "Form Submission",
  "TextBody": body,
});
    return {
      statusCode: 200,
      body: 'Email sent successfully'
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
  console.log("Function complete.")
}