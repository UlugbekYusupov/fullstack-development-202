
let teamName =
document.getElementById("teamName")

let wins =
document.getElementById("wins")

let losses =
document.getElementById("losses")

let scored =
document.getElementById("scored")

let conceded =
document.getElementById("conceded")

let addTeam =
document.getElementById("addTeam")

let tableBody =
document.getElementById("tableBody")

let sortButton =
document.getElementById("sortButton")

let highlightButton =
document.getElementById("highlightButton")

let teams = []

addTeam.addEventListener("click", function(){


let name = teamName.value
let win = Number(wins.value)
let loss = Number(losses.value)
let goalsScored = Number(scored.value)
let goalsConceded = Number(conceded.value)
let points = win * 3
let diff = goalsScored - goalsConceded

let team = {

name:name,
wins:win,
losses:loss,
points:points,
diff:diff

}

teams.push(team)

showTeams()
clearInputs()

})

function showTeams(){

tableBody.innerHTML = ""

teams.forEach(function(team,index){

let row =
document.createElement("tr")

row.innerHTML =

"<td>"+ (index+1) +"</td>"+
"<td>"+ team.name +"</td>"+
"<td>"+ team.wins +"</td>"+
"<td>"+ team.losses +"</td>"+
"<td>"+ team.points +"</td>"+
"<td>"+ team.diff +"</td>"

tableBody.appendChild(row)

})

}

sortButton.addEventListener("click", function(){
teams.sort(function(a,b){
return b.points - a.points

})

showTeams()

})

highlightButton.addEventListener("click", function(){

let rows =
tableBody.querySelectorAll("tr")

rows.forEach(function(row){
row.classList.remove("best")

})

if(rows.length > 0){
rows[0].classList.add("best")

}

})

function clearInputs(){

teamName.value=""
wins.value=""
losses.value=""
scored.value=""
conceded.value=""

}