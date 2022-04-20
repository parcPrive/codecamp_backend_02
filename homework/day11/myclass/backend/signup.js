
export const phoneCheck = async (phoneCheck) => {
  
  
  let checkPhone = await Token.findOne({phone: `${myphone}`}).exec()
  let checkToken = await Token.findOne({isAuth: true}).exec()
  const aaa = await axios.get(phoneCheck)
  if(checkPhone === null || checkToken === false){
    res.status(422).send("에러!! 핸드폰번호가 인증되지 않습니다.")
    return
  }else{
    const user = new User({
      email: email,
      name: name,
      phone: phone,
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

  }
}