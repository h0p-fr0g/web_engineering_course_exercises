const fibTable = [];

const MAX_SAFE = Number.MAX_SAFE_INTEGER;
maxSafeIteration = 0;

const MAX_VALUE = Number.MAX_VALUE;
maxIteration = 0;



f2 = 0n;
f1=1n;

const fibTabelle = [0n, 1n];

for(var i = 1; i < 2000; i++){

  fibTable[i] = f2+f1;

  if(fibTable[i] > MAX_SAFE && maxSafeIteration === 0){

    maxSafeIteration = i-1;
  }

  if(fibTable[i] > MAX_VALUE && maxIteration === 0){

    maxIteration = i-1;
  }


  f1temp = f1;
  f1 = f2+f1;
  f2 = f1temp;
}

console.log("Größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt: " + fibTable[maxSafeIteration] + ", ist die " + (maxSafeIteration+1) + ". Fibonacci-Zahl");
console.log("Größte Fibonacci-Zahl, die sich noch als Number speichern lässt: " + fibTable[maxIteration] + ", ist die " + (maxIteration+1) + ". Fibonacci-Zahl");
console.log("Größte Fibonacci-Zahl, die sich noch als BigInt speichern lässt ist abhängig vom Arbeitsspeicher.");

/*

Ausgabe:
Größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt: 8944394323791464, ist die 78. Fibonacci-Zahl
Größte Fibonacci-Zahl, die sich noch als Number speichern lässt: 130698922376339931803631155380271983098392443907412640726006659460192793070479231740288681087777017721095463154979012276234322246936939647185366706368489362660844147449941348462800922755818969634743348982916424954062744135969865615407276492410653721774590669544801490837649161732095972658064630033793347171632, ist die 1476. Fibonacci-Zahl
Größte Fibonacci-Zahl, die sich noch als BigInt speichern lässt ist abhängig vom Arbeitsspeicher.

*/