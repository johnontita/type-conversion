//type conversion
const birthYear='2000';
const age =23; //number
console.log(age)
console.log(String(age))//conversion to string
console.log(birthYear)
console.log(birthYear + 20);//concatenates the results without peforming actual plus operations
console.log(Number(birthYear) + 23);//conversion to number
console.log(2023-birthYear);
console.log(birthYear/10);
console.log(`John was born in ${birthYear} and now he is 23 years old`)


//type coercion;here 2019 is converted to string automatically
const universityStudent='I am John'
const admissionYear= 2019
const courseStudy='Bachelor of technology in electronics and computer engineering' 
console.log(`${universityStudent} pursuing ${courseStudy} I was admitted in ${admissionYear} `);

//all other operators are changed by js ie coercionally except plus operator
let x='10' -5;
x=x*4
console.log(x)
console.log('23'-'10'-3);//converison is automatically and hidden
console.log('100'>50);

