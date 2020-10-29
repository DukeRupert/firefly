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

// Grab form submission payload
  let body = "Form submited at ${date}"
  ;
  let payload = JSON.parse(event.body).payload;

  for (let key in payload.data) {
    body += '${key}:    ${payload.data[key]},    '
  }

  // error testing
  console.log(body)

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