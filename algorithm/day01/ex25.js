function makeNumber(num){
  let str = '1'
  for(let i=2; i<=num; i++){
    str = str + "-" + i
  }
  console.log(str)
}
makeNumber(5)
makeNumber(7)