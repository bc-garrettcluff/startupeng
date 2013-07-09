var fs = require("fs")

var isPrime = function(number){
	for(var divideBy = 2; divideBy < number; divideBy++){
		if(number % divideBy === 0){
			return false;
		}		
	}
	return true;
};


var primes = [];
var number = 2;
while (primes.length < 100){
	if(isPrime(number)){
		primes.push(number);
	}
	number++;
}


fs.writeFileSync("part2.txt", primes.join(","));

