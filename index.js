
function typeOfTriangle(x, y, z) {
  x = Number(x);
  y = Number(y);
  z = Number(z);

  if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
    if (x == y && y == z) {
      return 'equilateral';
    } else if (x != y && y != z && x != z) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  } else {
    return `invalid: [${x},${y},${z}]`;
  }
}

let input = process.argv;
// console.log('INPUT: ' + input);
let x = input[2];
let y = input[3];
let z = input[4];
let res = typeOfTriangle(x,y,z);
console.log('The triangle is ' + res + '.');
