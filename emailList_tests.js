// Run theses tests using Mocha
var chai = require('chai');
var expect = chai.expect;
var examples = require('./examples');




describe("the behavior of the code in the examples", function(){

  it("calculates the average of an array", function(){
      expect(examples.average([2,2,2])).equal(2);      
  });
  it("calculates the average of an array with decimals", function(){
      expect(examples.average([7,7,9])).equal(7.666666666666667);      
  });


  it("calculates autoejecutable", function(){
    var valor = (function(a, b){
  		return a / b;
	})(10,2);

  	expect(valor).equal(5);

  });

  it("calculates funcion anidada", function(){

    	function resta(){

    		var r = function anidada(){

    			return 7*2;
    		};
    		return r;
    	}
      expect(resta()()).equal(14);      
  });

  it("calculates un bucle", function(){

  	var array_s = ["a","b","c"], letra, concat;
  	for (var i = 0; i<array_s.length; i++){

  		letra = array_s[i];

  		if (letra === "c"){
  			concat = letra + "c";
  		}		 

  	}

  	expect(concat).equal("cc");

  });
  	



});

