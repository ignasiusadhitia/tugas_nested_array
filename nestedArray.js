console.log("NESTED ARRAY\n======================================");

function panggilNestedArray(value) {
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let newNestedArray = [];

  for (let i = 0; i < value.length; i++) {
    a.push(value[i][0]);
  }
  newNestedArray.push(a);

  for (let i = 0; i < value.length; i++) {
    b.push(value[i][1]);
  }
  newNestedArray.push(b);

  for (let i = 0; i < value.length; i++) {
    c.push(value[i][2]);
  }
  newNestedArray.push(c);

  for (let i = 0; i < value.length; i++) {
    d.push(value[i][3]);
  }
  newNestedArray.push(d);

  //   newNestedArray.push(
  //     [value[0][0], value[1][0], value[2][0]],
  //     [value[0][1], value[1][1], value[2][1]],
  //     [value[0][2], value[1][2], value[2][2]],
  //     [value[0][3], value[1][3], value[2][3]]
  //   );

  console.log(newNestedArray);
}

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
