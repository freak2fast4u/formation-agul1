// 'use strict' rajoute un contrôle pour éviter d'affecter 
// des variables au scope global à tort (en cas d'oubli du mot clé new par ex)
'use strict'; 

var i = 42;
var j = 0;
var mafonction;

var person={};
person.name='Etienne';
person.age='31';
person.location='Villeurbanne';
person.hello=function() {
	console.log("Hello " + this.name);
}

for(var attr in person) {
	console.log("attr="+attr+", type="+typeof attr+", value="+person[attr]);
}

person.hello();

var person2={

	get age(){
		return this._a;
	},

	set age(a){
		this._a=a;
	}

};

console.log(person2);
person2.age=18; // passe par le setter, ne définit/crée pas directement un attribut age sur l'objet
console.log(person2);

function outer(a,b) {
	// setInterval(function(){
	// 	a++;
	// 	console.log("a="+a);
	// }, 1000);

	return function(x) {
		return a*x+b;
	}
	
}

var f1=outer(5,2);
var f2=outer(1,0);

var y=f1(3); // 5*x + 2 => x=3, résultat 17
console.log("y="+y);
var y2=f1(1); // 1*0 + 1
console.log("y2="+y2);




var div = document.getElementById("mainDiv");
div.addEventListener('click', function(event) {
	// l'évènement sera arrêté à la descente, les listener sur les éléments enfants (boutons) ne seront jamais déclenchés
	// event.stopPropagation(); 
	console.log("Click on " + event.target.getAttribute("id") + " through div")
}, true);

function btn1_click() {
	var j = 42;
	alert("btn1_click i="+i +", j="+j);
}

function btn2_click() {
	j++;
	alert("btn2_click i="+i +", j="+j);
}

function btn3_click() {
	mafonction = btn1_click;
	alert("btn3_click i="+i +", j="+j);
}

function btn4_click() {
	var j = 45;
	mafonction();
	alert("btn4_click i="+i +", j="+j);
}

var tab = [];
tab.push("blah");
tab.push("bleh");
tab.push("blih");
tab.forEach(function(elem, idx) { console.log("idx="+idx+", elem="+elem) });


var elem1 = tab.pop();
console.log("popped elem1="+elem1);
console.log("tab="+tab);


var p1={ age:41, name:'toto', city:'lyon' };
var people = [];
people.push({ age:41, name:'toto', city:'lyon' });
people.push({ age:12, name:'toto', city:'lyon' });
people.push({ age:10, name:'toto', city:'lyon' });


// liste les ages des personnes qui ont moins de 18 ans.
var avg=people
.filter(p => p.age < 18)
.map(p =>p .age)
.reduce((p,c,i,a) => i===a.length-1 ? ((p+c)/a.length) : (p+c),0);

console.log("avg="+avg);


// var btns = document.getElementsByTagName("input");
// console.log("btns="+btns);
// for (var b = 0; btns.length; b++) {
// 	var unBtn = btns[b]; // cette variable est globale, un bloc n'est pas une fonction
// 	console.log(unBtn.name)
// 	unBtn.addEventListener('click', generateCallBack(b));
// }

for (var i=1; i <= 4; i++) {
	console.log("i="+i);
	(function (j) {
		console.log("Looking for btn"+j);
		var btn = document.getElementById("btn" + j);
		btn.addEventListener('click', generateCallBack(j))
	})(i);
}


function generateCallBack(x) {
	return function() {
		console.log("Click on " + x);
	}
}



/*
function f1() {
	var i = 43; // valide, mais on perd l'accès au i global

	function f2() {

		var y = 789;
		function f3() {
			var x = 123;


		}
	}
}
*/

// Les commentaires indiquent implicitement ce qui est fait lors
// de l'"instanciation" par un new
function Person(firstname, lastname, age) {
	//this = {}
	this._firstname=firstname;
	this._lastname=lastname;
	this._age=age;
	console.log(this);
	//return this;
}

// Person.prototype={
// 	vieillir:function(n) {
// 		this._age += n;
// 	}
// }

Person.prototype.rajeunir=function(n) {
		this._age -= n;
};

//Person.prototype.constructor=Person; 

// ne pas utiliser le new aura pour implication que 
// this dans cette fonction fera référence au scope global, c'est à 
// dire à self, window, ou global ... ATTENTION !!!!
var p = new Person('toto', 'tata', 15); // p instanceof Person => true

p.rajeunir(1);
