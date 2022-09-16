//Hej kalaskamrater
//Tjoooo
function minMax(arrNum) {
  let max = arrNum[0];
  let min = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (min > arrNum[i]) {
      min = arrNum[i];
    }

    if (max < arrNum[i]) {
      max = arrNum[i];
    }
  }

  console.log(`Max number is : ${max}`);
  console.log("Min number is : " + min);
}

let input = [23, 81, 45, 12, 39, 35];
minMax(input);

const members = [
  'Miguel',
  'Mika',
  'Noel',
  'Patrik',
  'Rebecca',
  'Sanaz'
]

console.log('Medlemmar i grupp 7:')

for (i = 0; i < members.length; i++){
  console.log(i + 1 + '. ' + members[i])
}