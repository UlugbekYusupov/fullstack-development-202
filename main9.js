const inp = document.getElementById("parol")

inp.addEventListener("input", (e) => {
    const inpvalue = e.target.value
    cheked(inpvalue)
})

function cheked(a){
    if (a.length > 8){
        let Upper = 0;
        let Number = 0
        let Char = 0

        for (let i of a){
            if (/^[A-Z]$/.test(i)) {
                Upper += 1
            }
            else if (/^[0-9]$/.test(i)) {
                Number += 1
            }
            else if (/^[^a-zA-Z0-9]$/.test(i)) {
                Char += 1
            }
        }
        if (Upper > 0 && Number > 0 && Char > 0) {
            const cret = document.createElement("app")
            cret.className = 'respon'
            cret.innerHTML = '<div id="respn">Stronga</div>'
        }
        else if (
            (Upper > 0 && Number > 0) ||
            (Upper > 0 && Char > 0) ||
            (Number > 0 && Char > 0)
        ) {
            const cret = document.createElement("app")
            cret.className = 'respon'
            cret.innerHTML = '<div id="respn">Medium</div>'
        }
        else {
            const cret = document.createElement("app")
            cret.className = 'respon'
            cret.innerHTML = '<div id="respn">Week</div>'
        }
    }
    else{
        console.log("%s is not eough. You must enter minimum 8 charakter.", a);
    }
}