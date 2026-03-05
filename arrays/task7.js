let text = "The Quick Brown Fox";
let newText = "";
for(let i=0; text.length>i;i++) {
    let code = text[i].charCodeAt(0);
    if(code >=65 && code<=90) {
        newText += text[i].toLowerCase();
    } else if(code >=97 && code<=122) {
        newText += text[i].toUpperCase();
    } else newText+= text[i];
}
console.log(newText);