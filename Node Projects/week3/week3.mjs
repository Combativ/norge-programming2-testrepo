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