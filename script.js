/*var lastName = prompt("What is your name?");
console.log(lastName);
alert("you have a problem!");     

var age = '23';

if(age === 23){
    console.log('qie');
}


var JohnHeights = 180;
var JohnAge = 25;
var JasonHeights = 175;
var JasonAge = 26;
var LianHeights = 185;
var LianAge = 24;
var JohnScore = JohnHeights + JohnAge * 5;
var JasonScore = JasonHeights + JasonAge * 5;
var LianScore = LianHeights + LianAge * 5;

if(JohnScore > JasonScore && LianScore < JohnScore){
    console.log("Winner is John!");
} else if(LianScore > JasonScore && LianScore > JohnScore){
    console.log("Lian win!");
} else if(JohnScore === JasonScore && JohnScore === LianScore){ 
    console.log("All win!");
}else {
    console.log("Jason is Win!");
}



function age(year) {
    var currentAge = 2017 - year;
    return currentAge;
}

//var JohnAge = age(1990);
console.log(age(1993));


var car = {
    make: 'chevy',
    year: 2010,
    color: 'silver',
    vinNumber: 76849573,
    calculateAge: function() {
        this.age = 2017 - this.year;
    }
}
car.calculateAge();
console.log(car);



var array = [1965, 2008, 1992];
var tony = [];
for (var i = 0; i < array.length; i++) {
    tony.push(2017 - array[i]);
}

console.log(tony);

var bollen = [];
for (var i = 0; i < tony.length; i++) {
    if (tony[i] >= 18) {
        bollen.push(true);
    } else {
        bollen.push(false);
    }
}
console.log(bollen);


*/

/*
var john = {
    name: 'lian',
    year: 1993,
    age: function (year) {
        console.log(2017 - this.year);
    }
}

john.age();
*/
//var FirstName = 'Muzi';
//var age = 28;

//alert('Attention! ' + FirstName + ' is here!');
//console.log(FirstName + ' turn in ' + age + ' today.');


//document.getElementById("col").style.color = "#ff0000";
//co.style.color = "blue";
var com = document.getElementById("id");
com.innerHTML = "ni hao";
com.style.color = "blue";


