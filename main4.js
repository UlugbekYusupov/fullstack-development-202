console.log(x);

var x = 5;

let y = 10;

function demo() {
    console.log(x);

    var x = 20;

    {
        let y = 30;
        console.log(y);
    }

    console.log(y);
    console.log(x);
}

demo();

