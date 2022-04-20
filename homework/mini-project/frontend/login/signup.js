// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const phoneNum = document.getElementById("PhoneNumber01").value+
  document.getElementById("PhoneNumber02").value+
  document.getElementById("PhoneNumber03").value

  axios.post("http://localhost:3001/tokens/phone",{
    myphone:phoneNum
  })
  await console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const token = document.getElementById("TokenInput").value
  axios.patch("http://localhost:3001/tokens/phone",{
    token: token

  }).then((res) => {
    console.log(res)
    
  })
  
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const personal = document.getElementById("SignupPersonal1").value +"-" +document.getElementById("SignupPersonal2").value
  const phone = document.getElementById("PhoneNumber01").value + document.getElementById("PhoneNumber02").value + document.getElementById("PhoneNumber03").value
  const prefer = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value
  const pwd = document.getElementById("SignupPwd").value
 
  axios.post("http://localhost:3001/user",{
    email: email,
    name: name,
    phone: phone,
    personal: personal,
    prefer: prefer,
    pwd: pwd
  })
  await console.log('인증 번')
}