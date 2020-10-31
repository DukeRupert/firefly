const postmark = require('postmark');

const sendThankYouEmail = async (payload) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');
    const client = new postmark.ServerClient(process.env.POSTMARK);

    // build template model object
    const model = {
      ...payload.human_fields,
      "sitename" : payload.site_url,
      "company_name" : "Firefly Software Engineering"
    };

    const mailData = {
      "From": process.env.FROM_ADDRESS,
      "TemplateAlias" : "clientContact",
      "TemplateModel" : model,
      "To": process.env.TO_ADDRESS,
    };
    console.log(JSON.stringify(mailData));

    client.sendEmailWithTemplate(mailData, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};

exports.handler = async event => {
  try {
    const data = JSON.parse(event.body).payload;
    
    await sendThankYouEmail(data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully"
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