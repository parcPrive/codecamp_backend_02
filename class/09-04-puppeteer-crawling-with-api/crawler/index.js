//여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { Stock } from './models/stock.models.js'

//몽고DB 접속
mongoose.connect("mongodb://localhost:27017/codecamp")

async function startCrawling(){
  const browser = await puppeteer.launch({  headless: false }) //headless:브라우저가 없다 펄스를 넣어서 브라우저가있다. await있어야한다.
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720}) //창 사이즈
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
  await page.waitForTimeout(1000) //페이지 요청 주기시간 조절
  const framepage = await page.frames().find(el => el.url().includes("/item/sise_day.naver?code=005930")) //iframe의 목록을 뽑아온다.
  for(let i=3; i<=7; i++){
    await page.waitForTimeout(500)
    const price = await framepage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`,
      (el) => el.textContent
    )

    const date = await framepage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
      (el) => el.textContent
    )
   
    
    console.log(`날짜: ${date}, 가격:${price}`)
    const stock = new Stock({
      name: "삼성전자",
      date: date,
      price: Number(price.replace(",",""))//replace(",","")첫번째안에들어간 내용을 찾고 찾은것을 두번째 껄로 바꿔준다.
    })
    await stock.save()
  }
  
  await browser.close()
}

startCrawling()