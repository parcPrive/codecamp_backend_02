export class UserService{
  name = req.body.name
  email = req.body.email
  myphone = req.body.phone
  personal = req.body.personal
  prefer = req.body.prefer
  pwd =req.body.pwd             
  og = await preferAPI(prefer)
  myuser = req.body
  createuser = async(req,res) => {
      //email
  const isValid = checkValidationEmail(this.email)
  const mytemplate = getWelcomeTemplate(this.myuser)
  console.log(this.myuser.prefer)
    if(isValid){
      sendTemplateToEmail(this.myuser, mytemplate)
  }
//phone
  let checkPhone =  await Token.findOne({phone: this.myphone}).exec()
  let result = ""
  result += this.personal.slice(0, personal.length-7)
  result = result.padEnd(personal.length,"*")
   if(checkPhone === null || checkPhone.isAuth === false){
     res.status(422).send("에러!! 핸드폰번호가 인증되지 않습니다.")
   }else{
    const user = new User({
    email: this.email,
    name: this.name,
    phone: this.myphone,
    personal: this.result,
    prefer: this.prefer,
    pwd: this.pwd,
    og: {
      title:og.title,
      url: og.url,
      image: og.image
    }
    
 })
 await user.save()
  res.send(user._id)
 
   //res.send(checkToken)
    }
  
  }
}