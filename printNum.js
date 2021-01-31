// The program should print the numbers 1 to 100. 
//For multiples of 3, print “CLX” instead of the number and 
//for the multiples of 5, print “DTC”. 
//For numbers that are a multiple of 3 and 5, it should print “CLXDTC”.

function printNum(n) {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('CLXDTC');
    } else if (i % 3 === 0) {
      console.log('CLX');
    } else if (i % 5 === 0) {
      console.log('DTC');
    } else {
      console.log(i);
    }
  }
}

printNum(100)