const talabalar = [
    {name: "Elis", scores: [80, 90, 100]},
    { name: "Bob", scores: [50, 60, 70] },
    { name: "Charlie", scores: [30, 40, 20] }
];

let results = [];
let great = {average: 0};

for(let i of talabalar) {
    let average = 0;
    for(let value of i["scores"]) {
        average+=value;
    }
    average/=i["scores"].length;

    let user = {
        name:i['name'],
        pass:average>=50,
        average
    }
    results.push(user);

    if(great.average<user.average) {
        great = user;
    }
}

console.log(results);
console.log(great)