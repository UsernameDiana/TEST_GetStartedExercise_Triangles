//RETURN THE TYPE OF THE TRIANGLE, else INVALID
function typeOfTriangle(x, y, z) {
  if (check(x) == 'OK' && check(y) == 'OK' && check(z) == 'OK') {
    x = Number(x);
    y = Number(y);
    z = Number(z);
    if (x == y && y == z) {
      return 'equilateral';
    } else if (x != y && y != z && x != z) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  } else {
    let res = `invalid: [${x},${y},${z}]\n\n` + '1st: ' + check(x) + '\n2nd: ' + check(y) + '\n3rd: ' + check(z);
    return res;
  }
}

//CHECK IF INPUT IS VALID
function check(num) {
  let stat = '';
  if (num != undefined) {
    num = Number(num);
    if (isNaN(num)) {
      stat += 'Not a Number! '
    }
  }else{
    stat += 'Missing side length! '
  }

  if (num == 0) {
    stat += 'Side length of 0!'
  }
  if(stat == ''){
    return 'OK'
  }
  return stat;
}


//MAIN: 
let input = process.argv;
// console.log('INPUT: ' + input);
let x = input[2];
let y = input[3];
let z = input[4];
let res = typeOfTriangle(x, y, z);
console.log('The triangle is ' + res);
