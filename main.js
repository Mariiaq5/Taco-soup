var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (var i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Poter and the Sorcerer's Stone is: ${harryPotterTitles[0]}`);
    console.log(`Harry Potter and the Chamber of Secrets is: ${harryPotterTitles[1]}`);
    console.log(`Harry Potter and the Prisoner of Azkaban is: ${harryPotterTitles[2]}`);
    console.log(`Harry Potter and the Goblet of Fire is: ${harryPotterTitles[3]}`);
    console.log(`Harry Poter and the Goblet of Fire is: ${harryPotterTitles[4]}`);
    console.log(`Harry Potter and the Half-Blood Prince is: ${harryPotterTitles[5]}`);
    console.log(`Harry Potter and the Deathly Hallows is: ${harryPotterTitles[6]}`);
}

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for (let apple = 0; apple < grades.length; apple++){
    if(grades[apple] <= 69){
        console.log("You're got an F");
    } else if(grades[apple] >=70 && grades[apple] <= 76){
        console.log("You're got a D");
    } else if(grades[apple] >=77 && grades[apple] <= 84){
        console.log("You're got a C");
    } else if(grades[apple] >= 84 && grades[apple] <= 92){
        console.log("You're got a B");
    } else if(grades[apple] >= 93 && grades[apple] <= 100){
        console.log("You're got an A");
    }
}
// How many students got A's?
// How many students got B's?
// Which was the most common letter grade?
// What was the average percentage grade in the class?

let aGrades = 0;
let bGrades = 0;
let cGrades = 0;
let dGrades = 0;
let fGrades = 0;
let mostCommonGrade = "";
let mostCommonGradeCount = 0
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
let totalGradePoints = 0
for(let apple = 0; apple < grades.length; apple++){
    totalGradePoints += grades[apple]
    if(grades[apple] <= 69){
        console.log("You got an F")
        fGrades++
    } else if(grades[apple] >=70 && grades[apple] <= 76){
        console.log("You got a D");
        dGrades++
    } else if(grades[apple] >=77 && grades[apple] <= 84){
        console.log("You got a C");
        cGrades++
    } else if(grades[apple] >= 84 && grades[apple] <= 92){
        console.log("You got a B");
        bGrades++
    } else if(grades[apple] >= 93 && grades[apple] <= 100){
        console.log("You got an A");
        aGrades++
    }
}
for(let i = 0; i < grades.length; i++){
    if (mostCommonGradeCount < aGrades){
        mostCommonGradeCount = aGrades
        mostCommonGrade = "A"
    } else if(mostCommonGradeCount < bGrades){
        mostCommonGradeCount = bGrades
        mostCommonGrade = "B"
    } else if(mostCommonGradeCount < cGrades){
        mostCommonGradeCount = cGrades
        mostCommonGrade = "C"
    } else if(mostCommonGradeCount < dGrades){
    mostCommonGradeCount = dGrades
    mostCommonGrade ="D"
    } else if(mostCommonGradeCount < fGrades){
    mostCommonGradeCount = fGrades
    mostCommonGrade ="F"
    }
}
let letterGrades = [aGrades, bGrades, cGrades, dGrades, fGrades]
let highScore = {
    score: 0,
    actualGrade: ""
}
for(let i = 0; i < letterGrades.length; i++){
    if(letterGrades[i].score > highScore.score){
        highScore = letterGrades[i]
    }
}
percentageGrade = totalGradePoints / grades.length

console.log(mostCommonGrade, mostCommonGradeCount, "Most Common Grade");
console.log(percentageGrade, "This is n avarage of grades");
console.log(`The avarge percent is ${Math.ceil(percentageGrade)}`);
console.log(aGrades, "This is A grade");
console.log(bGrades, "This is B grade");



let cheerString = ""
for(let  i = 2; i <= 8; i += 2){
    cheerString += `${i}`
}

cheerString += "Who do we appreciate?!"

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence = ""

for(let i = 0; i < sentenceArray.length; i++){
    if(( (i) % 3) === 0){
        sentence += `MOOOOOOOO ${sentenceArray[i]} `
    }
    else{sentence += `${sentenceArray[i]} `
    }
}
    console.log(sentence);



const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Output the following values to the terminal.
// ${name} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.
 for(let i = 0; i < 4; i++){
    console.log(`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. 
    He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Albums.`)
 }