import {checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail} from '../02-04-welcome-template-api/email.js'

function createUser(user){
  const isValid = checkValidationEmail(user.email)
  if(isValid){
    const mytemplate = getWelcomeTemplate(user)
    sendTemplateToEmail(user.email, mytemplate)
    
  }
}

const myuser = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  email: "a@a.com",
  password: "1234"
}