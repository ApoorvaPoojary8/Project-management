import Mailgen from "mailgen";
import nodemailer from "nodemailer";


const sendEmail = async(options) =>{
    const mailGenerator = new Mailgen({
        theme:"default",
        product:{
            name:"Sprintsync",
            link:"https://sprintsync.com"
        }
    })
    const emailTextual = Generator.generatePlaintext(options.mailgenContent)
    const emailHtml = Generator.generatePlaintext(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host:process.env.MAILTRAP_SMTP_HOST,
        port:process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user:process.env.MAILTRAP_SMTP_USER,
            pass:process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from : "mail.tasksmanager@gmail.com",
        to:options.email,
        subject:options.subject,
        text:emailTextual,
        html:emailHtml

    }
    try{
        await transporter.sendMail(mail);
    }
    catch(error){
        console.error("Email service Failed.Make sure that you have provided tehyour mail trap credentials in the .env");
        console.error(error);
    }
}




const emailVerificationMailgenContent = ( username,
    verificationUrl)=>{
        return{
            body:{
                name:username,
                into:"Welcome to our App! we'are exited to have you on board.",
                action:{
                    instructions:
                    "To verify your email please click on the folowing button",
                    button:{
                        color:"#22BC66",
                        text:"verify your email",
                        link:verificationUrl,
                    }
                },
                outro:
                "Need help, or have questions ? Just reply to this email , we'd love to help",

            },
        }
}

const forgotPasswordMailgenContent = ( username,passwordResetUrl )=>{
        return{
            body:{
                name:username,
                into:"We got the request to reset the password of your account",
                action:{
                    instructions:
                    "To reset your password click on the following button or link",
                    button:{
                        color:"#57e092",
                        text:"Reset password",
                        link:verrificationUrl,
                    }
                },
                outro:
                "Need help, or have questions ? Just reply to this email , we'd love to help",

            },
        }
}


export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendEmail

}