//ejercicio 1

var li = "<li>";
var divRow = "<div class = 'row'>";
var divCol = '<div class="col-md-4">';
var img1 = '<img src="';
var img2 = '" height="250" alt="" />' 
var moviePoster = "img/foto.png";
var divCierre = '</div>';
var title1 = '<h2>';
var title2 = '</h2>';
var movieTitle = "pelicula";
var liCierre = '</li>';


document.body.innerHTML = `${li} ${divRow} ${divCol} ${img1} ${moviePoster} ${img2} ${divCierre} ${divCol} ${title1} ${movieTitle} ${title2} ${divCierre} ${divCierre} ${liCierre}`;

//ejercicio 2
const operacion = (num1, num2) => num1 * num2;

console.log(operacion(3, 5));


const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);
console.log(toCelsius(23));


var padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
}
console.log(padZeros("2", "4"));

var power = (base, exponent) => {
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
}
console.log(power(1, 3));
 
let great = who => `Hola ${who}`;
console.log(great("Raul"));

//ejercicio 3

var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

for (var user of users){
    console.log(user.firstName); 
}
