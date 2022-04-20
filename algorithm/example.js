const arr = ['김세준', '백선호', '조아라', '홍재훈'];

function cb(element) {
  for(let i=0; i<arr.length; i++){
    element = arr[i].includes("조")
    if(element === true){
      return element === arr[i]
    }
  }
  
}

const result = arr.findIndex(cb);

console.log('결과', result); // 2
