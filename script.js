
/*let js = 'amazing';
console.log(40 + 10 - 5);
console.log("mioxd");

let firstName = "Jonas";

console.log(firstName);

//variables
let myFirstJob = "student";

console.log(myFirstJob);

let country = "Slovakia";
let continent = "Europe";
let population = "5mil";

console.log(country);
console.log(continent);
console.log(population);





let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 69);
// console.log(typeof "mioxd");


javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);
year = 1999;
console.log(year);
console.log(typeof year);




let age = 30;
age = 31;

const birthYear = 1999;
// birthYear = 1999;

// const job;

var job = "student";
job = "programmer";

*/
/*
const nowYear = 2040;
const ageMio = nowYear - 1999;
const ageKristinka = nowYear - 2002;
/*
console.log(ageMio, ageKristinka);

console.log(ageMio * 2, ageKristinka / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "mio";
const lastName = "michalik";
console.log(firstName + " " + lastName);

// assigment operators
let x = 10 + 5; //15
x += 10; // x = x +10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
console.log(x);

// comparison operators
console.log(ageMio > ageKristinka); // >,<,>=,<=
console.log(ageKristinka >= 18);

const isFullAge = ageKristinka >= 18;

console.log(nowYear - 1999 > nowYear - 2002)


console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

const averageAge = (ageMio + ageKristinka) / 2

console.log(ageMio, ageKristinka, averageAge);

*/
/*
const markVaha = 78;
const johnVaha = 92;
const markVyska = 1.69;
const johnVyska = 1.88;

let BMIMark;

BMIMark = 78 / 1.69 ** 2;

let BMIJohn;

BMIJohn = 92 / 1.88 ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
*/

/*
const firstName = "mio";
const job = "student";
const birthYear = 1999;
const year = 2022;

const mio = "I'm " + firstName + ",a " + (year -
    birthYear) + " years old " + job + "!";
console.log(mio);

const mioNew = `I'm ${firstName} ,a ${year -
    birthYear} year old ${job}!`;
console.log(mioNew);

console.log(`Just a regular string...`);


console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/

/*
const age = 15;

if (age >= 18) {

    console.log("Kristinka moze soferovat 😁")

}
else {

    const yearsLeft = 18 - age;
    console.log(`Kristinka nemoze soferovat ale musi pockat ${yearsLeft} roky 😁`)
}


const birthYear = 2002;
let century;

if (birthYear <= 2000) {

    century = 20;
}

else {
    century = 21;

    console.log(`Kristinka bola narodena v ${century}. storoci. 😁`)
}

*/


/*
const markVaha = 78;
const johnVaha = 92;
const markVyska = 1.69;
const johnVyska = 1.88;

let BMIMark;

BMIMark = 78 / 1.69 ** 2;

let BMIJohn;

BMIJohn = 92 / 1.88 ** 2;

if (BMIMark > BMIJohn) {

    console.log(`Mark ma vacsie BMI (${BMIMark}) ako John (${BMIJohn})`);
}
else {

    console.log("John(${BMIJohn}) ma vacsie BMI ako Mark (${BMIMark})");

}

*/
/*
const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("mio"));
console.log(typeof NaN);

console.log(String(21), 21);

//type coercion /// stringy spolu pri scitani pri odcitani ne
console.log("I am " + 21 + " years old");
console.log("21" - "10" - 1);
console.log("21" * "2");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);

*/

// 5 falsy values: 0, "", undefinied, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("mio"));
console.log(Boolean({}));


const money = 10;
if (money) {
    console.log("Dont spend it all");
}
else {
    console.log("You should get a job");
}


let height = 0;

if (height) {
    console.log("height is defined");
}
else {
    console.log("height is undefined")
}
*/

// === strict equality, no coercion
/*
const age = 18;
if (age === 18) console.log("You just became an adult(strict)");
// == loose equality, coercion
if (age == 18) console.log("You just became an adult(loose)");

// comparing values - vzdy strict equality, pouzivat strict nie loose

const favourite = Number(prompt("what is your fav number?"));
console.log(favourite);


if (favourite === 23) {
    console.log("popici bratu");

} else if (favourite === 7) {
    console.log("7 je popici bratu tiez");
} else if (favourite === 9) {
    console.log("9 je tiez parada bratu")
} else {
    console.log("neni to 23 ani 7")
} if (favourite !== 23) console.log("why not 23?");

*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// && - and
// || - or
// ! - not
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Kristinka moze soferovat")
// } else {
//     console.log("Dakto iny naj soferuje xd");
// }

const isTired = false; //C variable
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Kristinka moze soferovat")
} else {
    console.log("Dakto iny naj soferuje xd");
}
*/

// const skoreDolphins1 = 96;
// const skoreDolphins2 = 108;
// const skoreDolphins3 = 89;

// const skoreDolphins = (96 + 108 + 89) / 3
// const skoreKoalas = (88 + 100 + 110) / 3
// // const skoreKoalas1 = 80;
// // const skoreKoalas2 = 96;
// // const skoreKoalas3 = 108;

// // console.log(`Delfini skorovali v priemere ${skoreDolphins} golov
// // a Koaly skorovali v priemere ${skoreKoalas} golov`);

// console.log(skoreDolphins, skoreKoalas);



// if (skoreDolphins > skoreKoalas) {
//     console.log("Delfini vyhrali");

// } else if (skoreDolphins < skoreKoalas) {
//     console.log("Koaly vyhrali");
// } else {
//     console.log("mame tu remizku");
// }

/*
const skoreDolphins = (97 + 112 + 91) / 3
const skoreKoalas = (109 + 95 + 96) / 3
console.log(skoreDolphins, skoreKoalas);



if (skoreDolphins > skoreKoalas && skoreDolphins >= 100) {
    console.log("Delfini vyhrali");

} else if (skoreDolphins < skoreKoalas && skoreKoalas >= 100) {
    console.log("Koaly vyhrali");
} else if (skoreDolphins === skoreKoalas
    && skoreDolphins >= 100 && skoreKoalas >= 100) {

    console.log("mame tu remizku a obaja vyhrali");
} else {
    console.log("nikto nevyhral xd");
}

*/
/*
const day = "saturday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meet");
        break;
    case "tuesday":
        console.log("prepare videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("sutim kompa xd");
        break;
    case "friday":
        console.log("Robim videa");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy the weekend");
        break;

    default:
        console.log("not a valid day");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meet");

} else if (day === "tuesday") {
    console.log("prepare videos");

} else if (day === "wednesday" || day === "thursday") {
    console.log("sutim kompa xd");

} else if (day === "friday") {
    console.log("Robim videa");

} else if (day === "saturday" || day === "sunday") {
    console.log("enjoy the weekend");

} else {
    console.log("invalid");
}

*/
/*
const age = 23;
// age >= 18 ? console.log("I like wine😃") :
//     console.log("I like water😃");

const drink = age >= 18 ? "wine" : "water";
console.log(drink); // lahsie 

let drink2;
if (age >= 18) {
    drink2 = "wine";

} else {
    drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, 
and the total value ${tip + bill} `);


























