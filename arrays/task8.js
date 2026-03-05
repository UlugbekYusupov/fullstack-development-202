color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
o = ["st","nd","rd","st"]

for(let  i = 0;i<color.length;i++){
    console.log(
        `${i+1}${i<=2?o[i]:o[o.length-1]} choice is ${color[i]}`
    );
}