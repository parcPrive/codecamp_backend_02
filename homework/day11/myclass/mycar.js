class Mycar{
  model = "벤틀리"
  color = "무지개"
  power = "635마력"
  constructor(qqq){
  }
 mycar = () => {
   console.log(this.model, this.color, this.power)
 }

}
class Start extends Mycar {
  constructor(aaa){
    super()
  }
  start = () =>{
  console.log("출발? 출발해야지??")

  }
}

class Stop extends Mycar {
stop = () => {
  console.log("멈춰!!!!!!!!!")
  }
}
const start1 = new Start()
const stop1 = new Stop()
start1.start()
console.log("--------")
start1.mycar()
stop1.stop()
stop1.mycar()