lookup = letter => {
  vals = {
    a: 69,
    b: 32,
    c: 13,
    d: 81,
    e: 96,
    f: 30,
    g: 81,
    h: 79,
    i: 17,
    j: 95,
    k: 23,
    l: 88,
    m: 60,
    n: 58,
    o: 66,
    p: 40,
    q: 33,
    r: 83,
    s: 26,
    t: 62,
    u: 11,
    v: 4,
    w: 7,
    x: 20,
    y: 38,
    z: 3
  };
  return vals[letter];
};

hash = str => {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += lookup(str[i]) % 2;
  }
  return num;
};

console.log(hash("testimony"));
