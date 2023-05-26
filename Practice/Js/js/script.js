// L-40
// var x = "¡Hola mundo!"
// END OF L-40


// L-41
// var message = "in global";
// console.log('global: message: ' + message);

// var a = function()
// 		{
// 			var message = "inside of a";
// 			console.log("a: message = " + message);
// 			b();

// 			function c ()
// 				{
// 					console.log("c: message = " + message);
// 				}

// 			c();
// 		}

// function b ()
// 	{
// 		console.log("b: message = " + message);
// 	}

// a();
// END OF L-41

// L-42
// var x;
// console.log(x);

// if (x == undefined)
// 	{
// 		console.log('x is undefined');
// 	}

// x = 5;

// if (x == undefined)
// 	{
// 		console.log('x is undefined');
// 	}
// else
// 	{
// 		console.log('x has been defined');
// 	}
// END OF L-42


// L-43
// var string = 'Hello';

// string += " world";
// console.log(string + "!");

// console.log( (5 + 4) / 3);
// console.log( undefined / 5);

// function test1 (a)
// 	{
// 		console.log( a / 5 );
// 	}

// test1();



// // COMPARACIÓN SIMPLE
// var x = 4, y = 4;

// if (x == y)
// 	{
// 		console.log("x=4 is equal to y=4");
// 	}

// x = "4";

// if (x == y) //coherce o "cast"/ cambia uno de los tipos de alguna de las variables, una vez que son iguales se hace la comparación.
// 	{
// 		console.log("x='4' is equal to y=4");
// 	}

// // COMPARACIÓN ESTRICTA
// if (x === y)
// 	{
// 		console.log("Strict: x='4' is equal to y=4");
// 	}
// else
// 	{
// 		console.log("Strict: x='4' is NOT equal to y=4");
// 	}


// if ( false || null || undefined || "" || 0 || NaN )
// 	{
// 		console.log("This line won't ever execute");
// 	}
// else
// 	{
// 		console.log("All false");
// 	}

// if ( true && "hello" && 1 && -1 && "false" )
// 	{
// 		console.log("All true");
// 	}

// function a()
// 	{
// 		// El motor de JS ejecuta las instrucciones línea por línea
// 		// en el caso de return, los corchetes son opcionales por lo
// 		// que no busca en la siguiente línea la continuación de un
// 		// bloque de código, como si lo hace con las instrucciones de
// 		// función, if, else y demás.
// 		return
// 			{
// 				name: "Yaakov"
// 			};
// 	}

// function b() {
// 	return {
// 		name: "Yaakov"
// 	};
// }

// console.log( a() );
// console.log( b() );


// var sum = 0;

// for (var i = 0; i < 10; i++)
// 	{
// 		sum += i;
// 	}

// console.log("Sum of 0 through 9 is: " + sum);
// END OF L-43


// L-44
// function orderChickenAWith(sideDish) {

// 	console.log("Chicken with " + sideDish);
// }

// orderChickenAWith('noodles');
// orderChickenAWith();

// function orderChickenBWith(sideDish) {

// 	if ( sideDish === undefined ) {
// 		sideDish = 'whatever';
// 	}
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenBWith('noodles');
// orderChickenBWith();

// function orderChickenCWith(sideDish) {

// 	sideDish = sideDish || "whatever";

// 	console.log("Chicken with " + sideDish);
// }

// orderChickenCWith('noodles');
// orderChickenCWith();
// END OF L-43


// L-44
// var company = new Object();
// company.name = "Facebool";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log( "Company CEO name is: " + company.ceo.firstName)

// console.log( company["name"]);

// company.$stock = 100;
// console.log(company);

// company["Stock of company"] = 200;
// console.log(company);
// console.log("Stock price is: " + company["Stock of company"]);

// var stockPropName = "Stock de la compañía";
// company[stockPropName] = 700;

// console.log("Best stock price; " + company[stockPropName]);

// END OF L-44


// L-45
// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},

// 	$stock:100,
// 	"Stock de la compañía": 250
// };

// console.log(facebook);
// console.log(facebook["Stock de la compañía"])
// END OF L-45


// L-46
// function multiply( x, y ) {
// 	return x * y;
// }

// console.log(multiply(5,7));

// multiply.version = "v.1.0.0";

// console.log( multiply );
// console.log( multiply.toString() );
// console.log( multiply.version );
// console.log( multiply["version"] );

// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 					return multiplier * x;
// 				};

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10))

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// function doOperationOn( x, operation ){
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(450, doubleAll);
// console.log(result);
// END OF L-46


// L-47
// var a = 7;
// var b = a;

// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;

// console.log("After b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// var c = { x : 7 };
// var d = c;

// console.log(c);
// console.log(d);

// d.x = 5;
// console.log("After d update:");
// console.log(c);
// console.log(d);


// function changePrimitive(primValue) {
// 	console.log("in changePrimitive..");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;

// 	console.log("After:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);


// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;

// 	console.log("After:");
// 	console.log(objValue);
// }

// value = { x : 7 };
// changeObject(value);
// console.log("After changeObject, orig value:");
// console.log(value);
// END OF L-47


// L-48
// function test() {
// 	console.log("Hello Coursera!");

// 	console.log(this);

// 	this.myName = "Allan";
// }
// test();
// console.log(window.myName);


// function Circle (radius) {
// 	console.log(this);
	
// 	this.radius = radius;
// 	this.getArea = function () { return Math.PI * Math.pow(this.radius, 2); }
// }

// var myCircle = new Circle(10);
// console.log(myCircle);
// console.log( myCircle.getArea() );


// function bestCircle(radius) {
// 	this.radius = radius;
// }
// bestCircle.prototype.getArea1 = function() { return Math.PI * Math.pow(this.radius, 2); };

// var myCircle1 = new bestCircle(10);
// console.log(myCircle1);

// var otherCircle = new bestCircle(20);
// console.log(otherCircle);
// END OF L-48


// L-49
// console.log("Ejemplo inicial");

// var literalCircle = {
// 	radio: 10,

// 	getArea: function () {
// 		console.log(this);
// 	}
// };

// literalCircle.getArea();


// console.log("Ejemplo 0");

// var literalCircle0 = {
// 	radius: 10,

// 	getArea0: function () {
// 		console.log(this);
// 		return Math.PI * Math.pow( this.radius, 2 );
// 	}
// };

// console.log( literalCircle0.getArea0() );


// console.log("Ejemplo 1");

// var literalCircle1 = {
// 	radius: 10,

// 	getArea1: function () {
// 		console.log(this);

// 		var increaseRadius = function () {
// 			console.log("this within increaseRadius function:");
// 			console.log(this);
// 			this.radius =  20;
// 		};

// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow( this.radius, 2 );
// 	}
// };

// console.log( literalCircle1.getArea1() );
// console.log("this in the global context:");
// console.log(this);
// console.log( this.radius );


// console.log("Ejemplo 2");

// var literalCircle2 = {
// 	radius: 10,

// 	getArea2: function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius2 = function () {
// 			console.log("this within increaseRadius function:");
// 			console.log(this);
// 			console.log("self within increaseRadius function:");
// 			console.log(self);
// 			self.radius =  20;
// 		};

// 		increaseRadius2();
// 		console.log( this.radius );

// 		return Math.PI * Math.pow( this.radius, 2 );
// 	}
// };

// console.log( literalCircle2.getArea2() );
// console.log("this in the global context:");
// console.log(this);
// console.log( this.radius );
// END OF L-49


// L-50
// console.log("Ejemplo 1");
// var array = new Array();
// array[0] = "Allan";
// array[1] = 2;
// array[2] = function (name)	{
// 								console.log("Hello " + name);
// 							};
// array[3] = { course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log( array[3].course );

// console.log("Ejemplo 2");
// var names = [ "Allan", "José", "Araya" ];
// console.log(names);

// console.log("Ejemplo 3");
// var names0 = [ {name:"Allan"}, {name:"José"}, "Araya" ];
// console.log(names0);

// console.log("Ejemplo 4");
// var names1 = [ "Allan", "José", "Araya" ];
// for (var i = 0; i < names1.length; i++) {
// 	console.log( "Hello " + names1[i] );
// }

// names1[100] = "Yaakov";

// for (var i = 0; i < names1.length; i++) {
// 	console.log( "Hello " + names1[i] );
// }

// console.log("Ejemplo 5");
// var myObj =	{
// 				name: "Yaakov",
// 				course: "HTML/CSS/JS",
// 				platform: "Coursera"
// 			};

// for ( var prop in myObj ) {
// 	console.log( prop + ": " + myObj[prop])
// }

// var names2 = [ "Allan", "José", "Araya" ];

// for ( var prop in names2 )	{
// 	console.log( "Hello " + names2[prop] );
// }

// names2.greeting = "Hi";

// for ( var prop in names2 )	{
// 	console.log( "Hello " + names2[prop] );
// }
// END OF L-50


// L-51
// function makeMultiplier( multiplier ) {

// 	function b() {
// 		console.log( "Multiplier is: " + multiplier );
// 	}

// 	b();

// 	return	(
// 				function (x) {
// 					return multiplier * x;
// 				}
// 			);
// }

// var doubleAll = makeMultiplier(2);
// console.log( doubleAll(10) );
// END OF L-51


// L-5X

// END OF L-5X