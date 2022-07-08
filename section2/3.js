// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
  let temp = [];
  let results = {};
  for (let key in data) {
    if (!data[key]) {
        data[key] = 0;
    }
    data[key] *= 3;
    temp.push([key, data[key]]);
  }
  temp.sort((a, b) => {
    return a[1] - b[1];
  });
  for (let i = 0; i < temp.length; i++) {
    results[temp[i][0]] = temp[i][1];
  }
  return results;
}

console.log(result(data));