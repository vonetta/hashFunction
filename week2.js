hash = str => {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += str.charCodeAt(str[i]) % 2;
  }
  return num;
};

console.log(hash("testimony"));
