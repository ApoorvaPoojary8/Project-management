import Mailgen from "mailgen";



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
    forgotPasswordMailgenContent

}