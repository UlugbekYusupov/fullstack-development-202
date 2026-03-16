const jamoalar = [
  { name: "Team A", wins: 5, losses: 2, points: 15 },
  { name: "Team B", wins: 6, losses: 1, points: 18 },
  { name: "Team C", wins: 3, losses: 4, points: 9 },
];

function saralash() {
  jamoalar.sort(function (a, b) {
    return b.points - a.points;
  });
}

function engYaxshiJamoa() {
  let engKopOchko = 0;
  let engYaxshi = "";

  for (i in jamoalar) {
    if (jamoalar[i].points > engKopOchko) {
      engKopOchko = jamoalar[i].points;
      engYaxshi = jamoalar[i].name;
    }
  }

  return engYaxshi;
}

saralash();

console.log(jamoalar);

console.log("Eng yaxshi jamoa:", engYaxshiJamoa());
