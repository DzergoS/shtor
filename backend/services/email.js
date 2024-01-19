const fs = require('fs').promises,
      nodemailer = require('nodemailer'),
      path = require('path'),
      ejs = require('ejs'),
      { generateActivationToken } = require('../utils/tokens');
      
require('dotenv').config();


const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_PORT = process.env.EMAIL_PORT

const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT
const HOST = HOSTNAME === 'localhost' ? `${HOSTNAME}:${PORT}` : HOSTNAME
const PROTOCOL = HOSTNAME === 'localhost' ? 'http' : 'https';


const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true, 
  auth: {
    user: EMAIL_USER, 
    pass: EMAIL_PASS,
  },
});

const emailTemplatesDir = path.join(__dirname, '../templates/email');
const logoImagePath = path.join(__dirname, '../images/logo.jpg');


async function sendActivationEmail(userId, email) {
  const activationTemplate = path.join(emailTemplatesDir, 'activateSubscription.ejs');
  const templateContent = await fs.readFile(activationTemplate, 'utf-8');

  const activationToken = generateActivationToken(userId);
  const activationLink = `${PROTOCOL}://${HOST}/api/subscribe/activate/${encodeURIComponent(userId)}/${encodeURIComponent(activationToken)}`;
  
  const htmlContent = ejs.render(templateContent, { email, activationLink });

  const mailOptions = {
    from: EMAIL_USER, 
    to: email,
    subject: 'Activate your subscription for shtor.com.ua',
    html: htmlContent,
    attachments: [{
      filename: 'logo.jpg',
      path: logoImagePath,
      cid: 'shtorlogo'
  }],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendActivationEmail;