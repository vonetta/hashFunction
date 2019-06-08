hash = str => {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += str.charCodeAt(str[i]);
  }
  return num % 1000;
};

console.log(hash("testimony"));

function createArr() {
  this.arr = [];

  this.set = (i, val) => {
    let currentHash = hash(i);
    return (this.arr[currentHash] = val);
  };

  this.get = i => {
    let currentHash = hash(i);
    return this.arr[currentHash];
  };
}

let myArr = new createArr();
