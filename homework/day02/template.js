
function myuser({email, registration, phone, site}){
  return `
  <html> 
    <body>
      <div>${email}</div>
      <div>${registration}</div>
      <div>${phone}</div>
      <div>${site}</div>
    </body>
  </html>
`
}

const my = {
  email: "gusahr119@gmail.com",
  registration: "950119-1011111",
  phone: "010-9775-8809",
  site: "www.naver.com"
}
const result = myuser(my)
console.log(result)