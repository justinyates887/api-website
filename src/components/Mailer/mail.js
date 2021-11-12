const nodeMailer = require('nodemailer');
require ('dotenv')
const pkg = require('../../../package.json')

export default function mail (values) {
    const transporter = nodeMailer.createTransport({
        host: 'localhost',
        port: 587,
        secure: pkg.stage == 'development' ? false : true,
        requireTLS:true,
        auth: {
          user: 'associatedpoolsinc@gmail.com',
          pass: 'process.ENV.EMAIL_PASS'
        }
    });
        
    const mailMessage = {
        from: 'associatedpoolsinc@gmail.com',
        to: 'info@associatedpoolsinc.com',
        subject: `Contact form submission by ${values.firstName}`,
        text: `From: ${values.firstName} ${values.lastName} \n\
                Email: ${values.email} \n\
                Phone: ${values.phone} \n\
                Project Address: ${values.addressOne}\n\
                ${values.addressTwo}\n\
                City: ${values.city}\n\
                State: ${values.state} \n\
                Zip: ${values.zip} \n\
                Message: ${values.message}`
    };
        
    transporter.sendMail(mailMessage, function(error){
        if (error) {
            console.log(error);
        } 
    });

}