//여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
import puppeteer from 'puppeteer'
import mongoose from 'mongoose'
import { Starbucks } from './models/starbucks.models.js'

//몽고DB 접속
mongoose.connect("mongodb://localhost:27017/miniproject")

async function startCrawling(){
  const browser = await puppeteer.launch({  headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720}) //창 사이즈
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do")
  await page.waitForTimeout(1000) //페이지 요청 주기시간 조절
  for(let i=1; i<=10; i++){
    await page.waitForTimeout(500)
    const img = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.src
    )

    const menu = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    )
    // console.log(`${img},${menu}`)
    const starbucks = await new Starbucks({
      menu: menu,
      img: img
    })
    console.log(starbucks)
    //console.log(`${img},${menu}`)
    await starbucks.save()
  }
  
  await browser.close()
}

startCrawling()
