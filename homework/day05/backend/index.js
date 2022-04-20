
import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
const port = 3000

app.get('/users', (req, res) => {
  //데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    { 
      email : "aaa@gmail.com", 
      name : "철수",
      phone : "01012345678",
      personal : "220110-1222222",
      prefer : "https://naver.com"
    },
    { 
      email : "aaa@gmail.com", 
      name : "짱구",
      phone : "01011112222",
      personal : "220110-2222222",
      prefer : "https://naver.com"
    },
    { 
      email : "aaa@gmail.com", 
      name : "훈이",
      phone : "01022223333",
      personal : "220110-3222222",
      prefer : "https://naver.com"
    },
    { 
      email : "aaa@gmail.com", 
      name : "맹구",
      phone : "01033334444",
      personal : "220110-4222222",
      prefer : "https://naver.com"
    },
    { 
      email : "aaa@gmail.com", 
      name : "저기",
      phone : "01044445555",
      personal : "220110-5222222",
      prefer : "https://naver.com"
    }
  ]

  //2. 꺼내온 결과 응답 주기
  res.send(result)
})
app.get('/starbucks', (req, res) =>{
 const result = [
  { name: '아메리카노', kcal: 5 },
  { name: '카페라떼', kcal: 5 },
  { name: '바닐라라떼', kcal: 5 },
  { name: '카푸치노', kcal: 5 },
  { name: '에스프레소', kcal: 5 },
  { name: '아인슈페너', kcal: 5 },
  { name: '핫초코', kcal: 5 },
  { name: '민트초코', kcal: 5 },
  { name: '카페모카', kcal: 5 },
  { name: '소이라떼', kcal: 5 }
 ]
 
 
 
  res.send(result)
})

// app.post('/user', (req, res) => {
//   //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
//   //프론트엔드로부터 데이터를 받아오기
//   //콘솔로 찍어서 확인해보기
//   console.log(req)

//   //2. 저장결과 알려주기!!
//   res.send('등록에 성공하셨습니다!!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})