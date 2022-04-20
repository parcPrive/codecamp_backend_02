const date = new Date()

let yyyy = date.getFullYear()
let mm = String(date.getMonth() + 1).padStart(2, "0") 
let dd = String(date.getDate()).padStart(2, "0")
let hh = String(date.getHours()).padStart(2, "0")
let nn = String(date.getMinutes()).padStart(2, "0")
let ss = String(date.getSeconds()).padStart(2, "0")
console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${nn}:${ss}`)