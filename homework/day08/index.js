
import {checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";


import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import mongoose from 'mongoose'

import {Token} from "./models/token.model.js"

import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


const port = 3001

app.post('/tokens/phone', async (req, res) => {
  const myphone = req.body.myphone
  //1.휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone)
  let result = await Token.findOne({phone: `${myphone}`}).exec()

  if(isValid){
    //2.핸드폰 토큰 6자리 만들기
    const mytoken = getToken()
    //3번 핸드폰번호에 토큰 전송하기
    //sendTokenToSMS(myphone, mytoken)
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
  const mytoken = getToken()
  let result = await Token.findOne({phone: `${myphone}`}).exec()

  if(result === null){
    result = "1"
  }

  if(myphone !== result.phone){
    res.send(false)
   
  }else{
    
    
    await Token.updateOne({phone: `${myphone}`}, {isAuth: true})
    res.send(true)
    
  }
  //res.send(result)
})



//몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/phone")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


