/*
    Hi, the following tasks are created with an emphasis of making you use all the aspect of our basic syllabus (variables, conditionals, arrays, loops, functions and structures). 
    The tasks are not intended to be hard or time consuming. The intent is to give you the opportunity to create a beautiful solution, 
    think hard about naming and structure, think about how your code communicates when run, think really hard about what is actually being asked of you.
*/


/*
1. Daily Temperature Analyzer

    You are given an array of daily temperatures for one week.
    Loop through the array and count how many days were:
    *	below 5
    *	between 5 and 20
    *	above 20
	
    Store the counts in an object with meaningful property names.
    Write a function that returns a human-readable sentence summarizing the week (e.g. “There were 2 cold days, 3 mild days, and 2 warm days.”).
*/

const temperatures = JSON.parse(`[${document.querySelector("#temperatures").value}]`);


function printTemperatureAnalysis(temperatureList) {
    let days = {
        cold: 0,
        mild: 0,
        warm: 0
    }

    // counting cold/mild/warm days
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < 5) {
            days.cold++;
        } else if (temperatures[i] >= 5 && temperatures[i] <= 20) {
            days.mild++;
        } else {
            days.warm++;
        }
    }

    // differentiating singular/plural
    for (let category in days) {
        if (days[category] === 1) {
            days[category] = `1  ${category} day`;
        } else {
            days[category] = `${days[category]} ${category} days`;
        }
    }


    return `Hussa! There were ${days.cold}, ${days.mild}, and ${days.warm}.`;
}


console.log(printTemperatureAnalysis(temperatures));


/*
2. Describe a lectureroom

    Create an object that represents a lectureroom. 
    The object should describe attributes like:
    * the room name
    * the number of students
    * whether the room has a projector
    * ....
	
    Create an array containing several lectureroom objects.
    Write a function that returns a sentence describing each lectureroom in natural language.
*/


let lectureroom = {
    name: "F2005",
    students: 35,
    hasProjector: true,
    numberOfDoors: 3,
};

let lectureroom2 = {
    name: "D2034",
    students: 18,
    hasProjector: false,
    numberOfDoors: 2,
};

let lectureroom3 = {
    name: "F3007",
    students: 30,
    hasProjector: true,
    numberOfDoors: 2,
};

let lecturerooms = [lectureroom, lectureroom2, lectureroom3];

function printLecturerooms(rooms) {
    let result = "";
    for (let i = 0; i < rooms.length; i++) {
        result += `The ${i+1}. room has the name ${rooms[i].name}, it can accomodate ${rooms[i].students} students and it has ${rooms[i].numberOfDoors} doors. `;
        
        if (rooms[i].hasProjector) {
            result += "It has a projector. ";
        } else {
            result += "It does not have a projector. ";
        }
        
        result += "\n";
    }

    return result;
}


console.log(printLecturerooms(lecturerooms));




/*
3. Survey Result Interpreter

    Analyze responses from a short survey.
    Store numeric survey answers (1–5) in an array.
    * Loop through the answers and:
    * count how many are positive (4–5)
    * neutral (3)
    * negative (1–2)
    * Store the results in an object.
    *Write a function that returns a short interpretation of the results in plain language.

*/

const surveyData = JSON.parse(document.querySelector("#surveyData").value);

function printAnalysisOfSurveyData(data) {

    let answers = [];

    // fill array with answers
    for (let question in surveyData) {
        for (let answer in surveyData[question]) {
            answers.push(surveyData[question][answer]);
        }
    }

    // prepare analysis
    let analysis = {
        positive: 0,
        neutral: 0,
        negative: 0,
        invalid: 0,
    }


    // count and categorise answers
    for (let answer of answers) {
        if (answer == 4 || answer == 5) {
            analysis.positive++;
        } else if (answer == 3) {
            analysis.neutral++;
        } else if (answer == 2 || answer == 1) {
            analysis.negative++;
        } else {
            analysis.invalid++;
        }
    }

    // print analysis
    console.log(`There were ${analysis.positive} positive answers, ${analysis.neutral} neutral answers, ${analysis.negative} negative answers, as well as ${analysis.invalid} invalid answers.`);

}


printAnalysisOfSurveyData(surveyData);