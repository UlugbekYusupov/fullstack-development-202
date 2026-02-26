1-mashq
let list = [2,5,-9]
for (let i in list) {
    if (list[i] < 0) {
        console.log(list[i])
    }
}

2-mashq
let list = [4,5,7,2,-2,0]
let katta = 0
for (let i in list) {
    if (list[i] < katta)
        list[i]=katta
    console.log(katta)
}

3-mashq
let juft = 0
let toq = 0
for (let i=0;i<=15;i++) {
    if (i%2==0) {
        juft++
        console.log(i)
    } else {
        toq++
    }
}
console.log("Juft : ",juft)
console.log("Toq : ",toq)

4-mashq
for (let i=0;i<=100;i++) {
    if (i%3==0 && i%5==0) {
        console.log("FIZZBUZZ")
    } else if (i%3==0) {
        console.log("FIZZ")
    } else if (i%5==0) {
        console.log("BUZZ")
    }
}

5-mashq

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0)
  {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) 
    {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

}


6-mashq 

let num = +prompt("3 xonali son = ")

xona1 = 0;
xona2 = 0;
xona3 = 0;

xona1 = num % 10;
xona2 = Math.floor(num / 10) % 10;
xona3 = Math.floor(num / 100);
result = Math.pow(xona1,3) + (Math.pow(xona2,3) + (Math.pow(xona3,3)))

if(result == num){
    console.log(result)
}else{
    console.log("xato")
}


7-mashq

let David = 90;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;

let average = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

let range;

if (average < 60){
    console.log("F")
} else if (average < 70){
    console.log("D")
} else if (average < 80){
    console.log("C")
} else if (average < 90){
    console.log("B")
} else {
    console.log("A")
}