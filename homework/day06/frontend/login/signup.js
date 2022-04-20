// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const phoneNum = document.querySelector("#PhoneNumber01").value+
  document.querySelector("#PhoneNumber02").value+
  document.querySelector("#PhoneNumber03").value

  axios.post("http://localhost:3000/tokens/phone",{
    myphone:phoneNum
  })
  await console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.querySelector("#SignupName").value
  const phoneNum = document.querySelector("#PhoneNumber01").value+
  document.querySelector("#PhoneNumber02").value+
  document.querySelector("#PhoneNumber03").value
  const PN =  document.querySelector("#SignupPersonal").value
  const site = document.querySelector("#SignupPrefer").value
  const email = document.querySelector("#SignupEmail").value
  const PW = document.querySelector("#SignupPwd").value
  axios.post("http://localhost:3000/users",{
    user:{
      name,phoneNum, site,email
    }
  })
  await console.log('회원 가입 이메일 전송')
  }