function zzz(aaaaa) {
  console.log("=======");
  console.log(aaaaa);
  console.log("=======");
}

@zzz
class AppController {}

class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }
  ggg() {
    console.log("안녕하세요");
  }
}
const aaa = new Aaa(50);
aaa.mypower = 5;

//private
class Bbb {
  constructor(private mypower) {}
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}
const bbb = new Bbb(50);

//readonly
class Ccc {
  constructor(readonly mypower) {}
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}
