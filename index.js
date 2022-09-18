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

console.log('\nMedlemmar i grupp 7:')
for (i = 0; i < members.length; i++){
  console.log(i + 1 + '. ' + members[i])
}

// Patrik
//Vad är vår gemensama ålder?
const Miguel = 0;
const Mika = 0;
const Patrik = 0;
const Sanaz = 0; 
const Noel = 0;
const Rebbeca = 0;
const sum = Miguel + Mika + Patrik + Sanaz + Noel + Rebbeca;

console.log('Vår gemensama ålder är: ' + sum);



// Miguels funktion, en hälsningsfras 

function hej (namn= 'klassen') {

console.log(`\n Hej, ${namn}!`) }

hej('webb22')

hej()


