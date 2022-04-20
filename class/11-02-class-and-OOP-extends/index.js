class SkyUnit{
  run = () => {
    console.log("날라서 도망가자!!")
  }
} 
class GroundUnit {

  constructor(qqq ){

  }

  run = () => {
    console.log("뛰어서 도망가자!!")
  }
}

class Monster extends GroundUnit{
  power = 20
  
  constructor(aaa){
    super()
  }

  attack = () => {
    console.log("공격하자")
    console.log("내공격력은"+ this.power+"이야!!")
  }

  
}
const mymonster1 = new Monster(30)
mymonster1.attack()
mymonster1.run()