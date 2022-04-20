
import {checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from "./email.js"

import { preferAPI } from "./siteAPI.js";
// import { phoneCheck } from "./signup.js";
import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { User } from './models/user.model.js'
import {Token} from "./models/token.model.js"
import { Starbucks } from "./models/starbucks.js";
import cors from 'cors'


dotenv.config()

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors())

app.post('/user', async (req, res) => {
 
  const name = req.body.name
  const email = req.body.email
  const myphone = req.body.phone
  const personal = req.body.personal
  const prefer = req.body.prefer
  const pwd =req.body.pwd             
  const og = await preferAPI(prefer)
  const myuser = req.body
  //email
  const isValid = checkValidationEmail(email)
  const mytemplate = getWelcomeTemplate(myuser)
  console.log(myuser.prefer)
    if(isValid){
      sendTemplateToEmail(myuser, mytemplate)
  }
//phone
  

  let result = ""
  result += req.body.personal.slice(0, personal.length-7)
  result = result.padEnd(personal.length,"*")
  
  let checkPhone =  await Token.findOne({phone: myphone}).exec()
   if(checkPhone === null || checkPhone.isAuth === false){
     res.status(422).send("에러!! 핸드폰번호가 인증되지 않습니다.")
   }else{
    const user = new User({
    email: email,
    name: name,
    phone: myphone,
    personal: result,
    prefer: prefer,
    pwd: pwd,
    og: {
      title:og.title,
      url: og.url,
      image: og.image
    }
    
 })
  await user.save()
  res.send(user._id)
 }
  

})

app.get('/users', async (req, res) => {
  let users = await User.find()
  res.send(users)
})

app.post('/tokens/phone', async (req, res) => {
  const myphone = req.body.myphone
  //1.휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone)
  let result = await Token.findOne({phone: `${myphone}`}).exec()

  if(isValid){
    //2.핸드폰 토큰 6자리 만들기
    const mytoken = getToken()
    //3번 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken)
    if(result === null){
      result = "1"
    }
    if(myphone !== result.phone){
      const token =  new Token({
        token: mytoken,
        phone: myphone,
        isAuth: false
      })
      await token.save()
      res.send("문자 전송") 
    }else{
      await Token.updateOne({phone: `${myphone}`}, {token: mytoken})
      res.send("토큰변경")
    } 
  }
})

app.patch('/tokens/phone', async (req, res) => {

  const myphone = req.body.myphone
  const checkToken = req.body.token

  let result = await Token.findOne({phone: `${myphone}`}).exec()
  
  if(result === null){
    result = "1"
  }

  if(myphone !== result.phone || checkToken !== result.token){
    res.status(442).send("false")
   
  }else{
    await Token.updateOne({phone: `${myphone}`}, {isAuth: true})
    res.send("true")
    
  }
})

app.get('/starbucks', async (req, res) => {

  let starbucksmenu = await Starbucks.find()
  res.send(starbucksmenu)
})

//몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/miniproject")







app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})

