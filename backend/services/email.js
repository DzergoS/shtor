const fs = require('fs').promises,
      nodemailer = require('nodemailer'),
      path = require('path'),
      ejs = require('ejs'),
      { HOSTNAME, PORT,
        EMAIL_HOST, EMAIL_PORT,
        EMAIL_USER, EMAIL_PASS } = require('../config'),
      { generateActivationToken } = require('../utils/tokens');


const products = [{
  "group": "OBJECT",
  "name": {
    "ua": "Браслет-підвіс",
    "en": "Bracelet-pendant"
  },
  "description": {
    "ua": "Дерево.\nВ комплекті вощений шнур 1 мм чорного кольору.\nРучна робота, кожен виріб унікальний.",
    "en": "Wood.\nBlack waxed cord included.\nHandcrafted. Each piece is unique."
  },
  "price": {
    "ua": 4500,
    "en": 125
  },
  "colors": [
    "Black",
    "Dark Brown",
    "Brown"
  ],
  "images": [
    "IMG_1030.png",
    "IMG_1058.png",
    "IMG_1061.png",
  ],
  "size": ["21,5", "22", "23,4", "25"],
  "variations": [{
    "color": "Black",
    "images": ["IMG_4014.png", "IMG_4015.png"],
  },{
    "color": "Dark Brown",
    "images": ["IMG_4016.png", "IMG_4017.png"],
  },{
    "color": "Dark Brown",
    "images": ["IMG_4018.png", "IMG_4019.png"],
  }]
},
{
  "group": "OBJECT",
  "size": ["15,5х8"],
  "feature": "long spiral",
  "name": {
    "en": "hair comb",
    "ua": "гребінь для волося"
  },
  "description": {
    "en": "Wooden.\nHandcrafted. Each piece is unique.",
    "ua": "Дерево.\nРучна робота. Кожен індвиідуальний."
  },
  "material": "silver",
  "price": {
    "en": 60,
    "ua": 2300
  },
  "images": [
    'IMG_1188.png',
    'IMG_1054_1.png',
  ]
},
]
      

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
const ProductImagePath = path.join(__dirname, '../../productPhotos/');






function getMailOptions(htmlContent, subject, productImagesAttachment = null) {
  return {
    from: EMAIL_USER, 
    to: email,
    subject: subject,
    html: htmlContent,
    attachments: [
      {path: logoImagePath,
      cid: 'shtorlogo'},
      productImagesAttachment,
    ],
  }
}


// const productImagesAttachment = products.flatMap((product, index) => {

//   return {
//     path: path.join(ProductImagePath, product.images[0]),
//     cid: `product_${index + 1}`
//   }
// });

// console.log(productImagesAttachment);

function productImagesAttachment(products) {
  return products.map((product, index) => ({
    path: path.join(ProductImagePath, product.image[0]),
    cid: `product_${index}`
  }));
}




async function sendActivationEmail(userId, email) {
  const activationTemplate = path.join(emailTemplatesDir, 'activateSubscription.ejs');
  const templateContent = await fs.readFile(activationTemplate, 'utf-8');

  const activationToken = generateActivationToken(userId);
  const activationLink = `${PROTOCOL}://${HOST}/api/subscribe/activate/${encodeURIComponent(userId)}/${encodeURIComponent(activationToken)}`;
  
  const htmlContent = ejs.render(templateContent, { email, activationLink });

  const mailOptions = getMailOptions(
    htmlContent,
    'Activate your subscription for shtor.com.ua'
  )

  await transporter.sendMail(mailOptions);
}


async function sendOrderDetails(email) {
  const orderDetailsTemplate = path.join(emailTemplatesDir, '/orderDetails/en.ejs');
  const templateContent = await fs.readFile(orderDetailsTemplate, 'utf-8');
  
  

  const htmlContent = ejs.render(
    templateContent,
    { email, products, shipping_price: '30', amount: '110' }
  );



  const mailOptions = getMailOptions(
    htmlContent,
    'Product order details purchased on shtor.com.ua',
    
  )

  console.log(productImagesAttachment(products));

  // await transporter.sendMail(mailOptions);
}


module.exports = {
  sendActivationEmail,
  sendOrderDetails
}