let students = [
    {
        name: 'David',
        mark: 80,
    },
    {
        name: 'Vinoth',
        mark: 77,
    },
    {
        name: 'Divya',
        mark: 88,
    },
    {
        name: 'Ishitha',
        mark: 95,
    },
    {
        name: 'Thomas',
        mark: 68,
    },
];


for(let e of students) {
    let mark = e['mark'];
    if(mark <= 60)  console.log(`${e['name']} baxosi F`)
    if(mark > 60 && mark < 70)  console.log(`${e['name']} baxosi D`)
    if(mark >= 70 && mark < 80)  console.log(`${e['name']} baxosi C`)
    if(mark >= 80 && mark < 90)  console.log(`${e['name']} baxosi B`)
    if(mark >= 90 && mark <= 100)  console.log(`${e['name']} baxosi A`)
}