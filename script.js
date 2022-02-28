

for (i = 1; i <= 7; i++) {
    console.log(i)
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

for (i=5; i <= 25; i+=4){
    console.log(i);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]

for (i of wizards) {
    console.log(i)
}

let harryPotterMovies = 0;
while (harryPotterMovies <= 7) {
    harryPotterMovies++
}
console.log(harryPotterMovies)