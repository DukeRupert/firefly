// Require:
var postmark = require("postmark");
console.log("Requirements met")

// Instantiate client using Netlify env
const token = process.env.POSTMARK;
console.log(token);

var client = new postmark.Client(token);
console.log("Client instantiated")

// Send an email:
exports.handler = async (event, context) => {


// Grab form submission payload
  let payload = JSON.parse(event.body).payload;
  console.log(payload)
  let myJSON = JSON.stringify(payload);
  console.log(myJSON)

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