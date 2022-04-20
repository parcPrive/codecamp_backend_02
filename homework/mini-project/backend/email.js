import {getToday} from './utils.js'
import axios from 'axios'

export function checkValidationEmail(email){
    if(email === undefined || !email.includes("@")){
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate(myuser){

    return `
        <html>
            <body>
                <h1>${myuser.name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${myuser.name}</div>
                <div>전화번호: ${myuser.phone}</div>
                <div>site: ${myuser.prefer}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
}

export async function sendTemplateToEmail(myuser, mytemplate){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey= process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER
    
    const result = await axios.post(`https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    {
        senderAddress: sender,
        title: `안녕하세요. ${myuser.name}님! 가입을 환영합니다.`,
        body: mytemplate,
        receiverList: [{receiveMailAddr: myuser.email, receiveType: "MRT0"}]
    },
    {
        headers: {
            "Content-Type" : "application/json;charset=UTF-8",
            "X-Secret-Key": XSecretKey
        }
    }
    )
    
    console.log("전송 끝!!")
    
    
    
    
    
    
    
    
    
    
    
    
    //console.log(email + "이메일로" + mytemplate + "를 전송합니다.")
}