// ASSIGNMENT
// Challenge 1

// let price = 100;
// let quantity = 4;

// let total = price * quantity;

// if (quantity >= 5) {
//     total = total * 0.8; 
// }
// else if (quantity >= 3) {
//     total = total * 0.9; 
// }

// console.log("Total price:", total);


// Challenge 2

// function checkPassword(password) {

//     let isUpper = false;
//     let isNumber = false;
//     let isSpecial = false;

//     let specials = ["!", "@", "#", "$"];

//     for (let i = 0; i < password.length; i++) {

//         if (password[i] >= 'A' && password[i] <= 'Z') {
//             isUpper = true;
//         }

//         if (password[i] >= '0' && password[i] <= '9') {
//             isNumber = true;
//         }

//         if (specials.includes(password[i])) {
//             isSpecial = true;
//         }
//     }

//     if (password.length >= 8 && isUpper && isNumber && isSpecial) {
//         return "Strong";
//     }
//     else if (password.length >= 8) {
//         return "Medium";
//     }
//     else {
//         return "Weak";
//     }
// }

// console.log(checkPassword("bc12345"));
// console.log(checkPassword("Abc12345"));
// console.log(checkPassword("Abc@12345"));


// Challenge 3

// function bankomat(summa) {

//     if (summa % 10 !== 0) {
//         return "Xato: summa 10 ga bo'linishi kerak";
//     }

//     let yuz = Math.floor(summa / 100);
//     summa = summa % 100;

//     let ellik = Math.floor(summa / 50);
//     summa = summa % 50;

//     let yigirma = Math.floor(summa / 20);
//     summa = summa % 20;

//     let on = Math.floor(summa / 10);

//     if (yuz > 0) {
//         console.log(yuz + " ta 100$");
//     }

//     if (ellik > 0) {
//         console.log(ellik + " ta 50$");
//     }

//     if (yigirma > 0) {
//         console.log(yigirma + " ta 20$");
//     }

//     if (on > 0) {
//         console.log(on + " ta 10$");
//     }
// }

// bankomat(130);


// Challenge 4

function svetafor(){
    console.log("Qizil");

    setTimeout(function () {
        console.log("Yashil");

        setTimeout(function () {
            console.log("Sariq");

        }, 2000);

    }, 5000);
}

svetafor();


// Challenge 5

function checkPassword(password) {

    let kattaHarf = false;
    let raqam = false;
    let maxsus = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] >= 'A' && password[i] <= 'Z') {
            kattaHarf = true;
        }

        if (password[i] >= '0' && password[i] <= '9') {
            raqam = true;
        }

        if (
            password[i] === "!" ||
            password[i] === "@" ||
            password[i] === "#" ||
            password[i] === "$"
        ) {
            maxsus = true;
        }
    }

    if (password.length >= 8 && kattaHarf && raqam && maxsus) {
        return "Strong";
    }

    else if (password.length >= 8 && (kattaHarf || raqam)) {
        return "Medium";
    }

    else {
        return "Weak";
    }
}

console.log(checkPassword("abc"));
console.log(checkPassword("Abc12345"));
console.log(checkPassword("Abc@12345"));


// Challenge 6

function bankAccount() {

    let balans = 0; 
    return {

        deposit: function(summa) {
            balans = balans + summa;
            console.log("Pul qo'shildi. Balans:", balans);
        },

        withdraw: function(summa) {

            if (summa <= balans) {
                balans = balans - summa;
                console.log("Pul yechildi. Balans:", balans);
            }
            else {
                console.log("Xato: yetarli pul yo'q");
            }
        },

        balance: function() {
            console.log("Balans:", balans);
        }

    };
}

let hisob = bankAccount();

hisob.deposit(100);
hisob.withdraw(40);
hisob.balance();


// Challenge 7

function roleSystem(role) {
    return {

        add: function () {
            if (role === "admin") {
                console.log("Content qo'shildi");
            } else {
                console.log("Ruxsat yo'q");
            }
        },

        edit: function () {
            if (role === "admin" || role === "editor") {
                console.log("Content tahrir qilindi");
            } else {
                console.log("Ruxsat yo'q");
            }
        },

        delete: function () {
            if (role === "admin") {
                console.log("Content o'chirildi");
            } else {
                console.log("Ruxsat yo'q");
            }
        },

        view: function () {
            console.log("Content ko'rildi");
        }

    };
}

let user = roleSystem("editor");

user.add();
user.edit();
user.delete();
user.view();


// Challenge 8

function soliqHisobla(maosh) {

    let soliq = 0;

    if (maosh < 10000) {
        soliq = 0;
    }
    else if (maosh <= 50000) {
        soliq = maosh * 0.10;
    }
    else {
        soliq = maosh * 0.20;
    }

    return soliq;
}


console.log("Soliq:", soliqHisobla(8000));
console.log("Soliq:", soliqHisobla(20000));
console.log("Soliq:", soliqHisobla(60000));