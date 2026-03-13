// //1.Funcgtion Declarition
//
// function sum1(a,b) {
//     return a + b;
// }
// sum1(1,2);
// //2.Function Expression
// let sum2 = function (a,b) {
//     return a + b;
// }
// sum2(4,2);
// //3.Arrow function
// let sum3 = (a,b) => {
//     return a + b;
// }
// sum3(5,2);
// //4.IIFE function
// (function (a,b) {
//     return a + b;
// })(3,4);
//
// // 5.Function Constructor
// let sum4 = new Function(
//     'a',
//     'b',
//     'return a + b;'
// );
// sum4(5,2);

const products = [
    {
        'name':"A53 5G",
        'price': 80,
        'id':1,
    },
    {
        'name':"iPhone 15",
        'price': 800,
        'id':2,
    },
    {
        'name':"A32",
        'price': 180,
        'id':3,
    },
    {
        'name':"iPhone 12",
        'price': 250,
        'id':4,
    },
    {
        'name':"iPhone 11",
        'price': 150,
        'id':5,
    },
    {
        'name':"Huawei P9",
        'price': 370,
        'id':6,
    },
];

function calculate(items, count) {
    let sum = 0;
    for(let i = 0;i<count;i++) {
        sum += items[i]['price'];
    }
    let discount = (count>3 && count<=5)?10:count>5?20:0;
    console.log(sum)
    let result = sum-(sum/100*discount);
    console.log(result)
}


// calculate(products,6);


// function validator(password) {
//     if(password.length<8) return "7 dan ko'p elment kiriting";
//
//     let values = [false,false,false];
//
//     for(let i=0;i<password.length;i++) {
//         let code = password.charCodeAt(i);
//         if(code>=65 && code<=90) values[0]=true;
//         else if(code>=48 && code<=57) values[1]=true;
//         else if(code>=33 && code<=47) values[2]=true;
//     }
//
//     let count = 0;
//     for(let i of values) if(i) count++;
//
//     return count===1?"Weak":count===2?"Medium":count===3?"Stromg":"ERROR";
// }
//
// console.log(validator("!Agfeyfghkn"));


// function atmMoney(number) {
//     if(number%10!==0) return "10 ga bo'linmaydi";
//     const moneys = [100,50,20,10];
//     const result = {};
//     for(let money of moneys) {
//         const count = Math.floor(number / money);
//         if(count>0) {
//             result[money] = count;
//             number = number%money;
//         }
//     }
//     return result;
// }
//
// console.log(atmMoney(130))



// function trafficLight(light){
//     let stopAt = 0;
//     let count = 0;
//
//     if(light==="Red")stopAt = 5;
//     else if(light==="Yellow")stopAt = 2;
//     else if(light==="Green")stopAt = 3;
//
//     const intervalId = setInterval(() => {
//         count++;
//         console.log('Seconds passed: ' + count);
//
//         if (count >= stopAt) {
//             clearInterval(intervalId);
//             console.log("Timer stopped.");
//         }
//     }, 1000);
// }
//
// trafficLight("Yellow");


// function bancAccount(money=0) {
//     let balance = money;
//
//     return {
//         deposit(depostiMoney){
//             if(depostiMoney>0) {
//                 balance += depostiMoney;
//                 return `Succesfuly added ${depostiMoney}`;
//             }
//             return "Invalid money";
//         },
//
//         withDraw(withDrawMoney) {
//             if(withDrawMoney===0) return "Invalid money";
//             const value = balance-withDrawMoney;
//             console.log(value)
//             if(value<0) {
//                 return `You don't have enough money`;
//             }
//
//             balance=value;
//             return `Succesfuly with drawed ${withDrawMoney}`;
//
//         },
//
//         viewBalance(){
//             return `Your balance is ${balance}`;
//         }
//     };
// }
//
//
// let account = bancAccount(340);
// console.log(account.deposit(1));
// console.log(account.viewBalance());
// console.log(account.withDraw(0));
// console.log(account.viewBalance());

// function createUser(role) {
//     return {
//         add(){
//             if(role==='admin') return `${role} can add`;
//             return "You don't have permission";
//         },
//         edit(){
//             if(role==='admin' || role==='editor') return `${role} can edit`;
//             return "You don't have permission";
//         },
//         delete(){
//             if(role==='admin') return `${role} can delete`;
//             return "You don't have permission";
//         },
//         view(){
//             if(role==='viewer' || role==='editor') return `${role} can view`;
//             return "You don't have permission";
//         },
//     };
// }
//
// let user = createUser("admin");
// console.log(user.edit());


// function taxCalc(money) {
//     const discount = money>10000 && money<50000?10:money>=50000?20:0;
//     return discount===0?"No tax":`${discount}% tax`;
// }
//
// console.log(taxCalc(50000));