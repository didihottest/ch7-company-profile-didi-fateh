function splitArray(x) {
    let ganjil = [],
      genap = [];
    for (let i = 0; i < x.length; i++)
      (i % 2 == 0 ? ganjil : genap).push(x[i]);
    return [ganjil, genap];
  }

module.exports = splitArray;