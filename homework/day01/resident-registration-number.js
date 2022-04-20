function registration(number) {
  const isValid = checkbar(number)
  if(isValid){
   const valid = numcheck(number)
   if(valid){
   masking(number)
    }
  }
}



function checkbar(number){
  if(number.includes("-") === false){
   console.log("에러발생!! 형식이 올바르지 않습니다!!!")
   return false
    } else{
      return true
    }
  }
  function numcheck(number){
    let frontNumber = number.split("-")[0]
    let backNumber = number.split("-")[1]
    let maskingNumber = []
  
  if(frontNumber.length !== 6 || backNumber.length !== 7){
    console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!")
    return false
  }else{
    return true
  }
}
function masking(number){
  let frontNumber = number.split("-")[0]
  let backNumber = number.split("-")[1]
  let maskingNumber = []
  maskingNumber.push(backNumber[0])
  for(let i=0; i<6; i++){
    maskingNumber.push("*")
  }
  maskingNumber = maskingNumber.join("")
  console.log(frontNumber+"-"+maskingNumber)
}





registration("920124-1038293")