import makeRequest from "./request.mjs";
import fs from "node:fs";



//#region API URLS
const player = process.env.PLAYER;
const baseURL = "https://spacescavanger.onrender.com";
const startURL = `${baseURL}/start?player=${player}`;
const answerURL = `${baseURL}/answer`

const token = process.env.API_KEY;
const spaceBaseURL = "https://api.le-systeme-solaire.net/rest";
const spaceBodiesURL = `${spaceBaseURL}/bodies`;
//#endregion

let progress = {};
const progFilePath = "progress.json";
try {
    if (fs.existsSync(progFilePath)) {
        const progFile = fs.readFileSync(progFilePath);
        progress = JSON.parse(progFile);
    }
} catch (err) {
    console.log(err);
    console.log("No progress saved");
}


function saveProgress(progress) {
    fs.writeFileSync(progFilePath, JSON.stringify(progress));
}



// START Game
//progress = {}; //WIPE PROGRESS

if(!progress["start"]) {
    let startResponse = await makeRequest(startURL);
    console.log(startResponse);
    progress["start"] = true;
    saveProgress(progress);
}

//#region Solve first proble
if (!progress["first"]) {

    let response = await makeRequest(spaceBodiesURL, "GET", token);

    const bodies = response.bodies;

    let sun = bodies.find( item => item.englishName == "Sun" );

    const pin = Math.abs(sun.meanRadius - sun.equaRadius);

    response = await makeRequest(answerURL, "POST", "", { answer: pin, player: player });
    console.log(response);
    progress["first"] = true;
    saveProgress(progress);
}

//#endregion

//#region Solve second problem
if (!progress["second"]) {

    let solarResponse = await makeRequest(spaceBodiesURL, "GET", token);
    const bodies = solarResponse.bodies;
    const planets = bodies.filter( item => item.isPlanet );

    // find closest axial tilt to earth
    const earthAxialTilt = planets.find( item => item.englishName == "Earth" ).axialTilt;
    let closestPlanet = {};
    let closestAxialDistance = Math.abs(earthAxialTilt - Infinity);

    for (let i = 0; i < planets.length; i++) {
        //skip earth
        if (planets[i].englishName == "Earth") {
            continue;
        }

        const planet = planets[i];
        const planetAxialTilt = planet.axialTilt;
        const axialDistance = Math.abs(earthAxialTilt - planetAxialTilt);
        if (axialDistance < closestAxialDistance) {
            closestAxialDistance = axialDistance;
            closestPlanet = planet;
        }
    }

    let scavangerResponse = await makeRequest(answerURL, "POST", "", { answer: closestPlanet.englishName, player: player });
    console.log(scavangerResponse);


    progress["second"] = true;
    saveProgress(progress);
}

//#endregion

//#region Solve third problem
if (!progress["third"]) {

    let solarResponse = await makeRequest(spaceBodiesURL, "GET", token);
    const bodies = solarResponse.bodies;
    const planets = bodies.filter( item => item.isPlanet );

    // find planet with shortest day
    let shortestDayPlanet = {};
    let shortestDay = Infinity;

    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        const planetDay = Math.abs(planet.sideralRotation);
        if (planetDay < shortestDay) {
            shortestDay = planetDay;
            shortestDayPlanet = planet;
        }
    }

    let scavangerResponse = await makeRequest(answerURL, "POST", "", { answer: shortestDayPlanet.englishName, player: player });
    console.log(scavangerResponse);


    progress["third"] = true;
    saveProgress(progress);
}

//#endregion

//#region Solve fourth problem
if (!progress["fourth"]) {

    let solarResponse = await makeRequest(spaceBodiesURL, "GET", token);
    const bodies = solarResponse.bodies;
    const jupiter = bodies.filter( item => item.englishName == "Jupiter" );

    const numberOfMoons = jupiter[0].moons.length;

    let scavangerResponse = await makeRequest(answerURL, "POST", "", { answer: numberOfMoons, player: player });
    console.log(scavangerResponse);


    progress["fourth"] = false;
    saveProgress(progress);
}

//#endregion

//#region Solve fifth problem
if (!progress["fifth"]) {

    let solarResponse = await makeRequest(spaceBodiesURL, "GET", token);
    const bodies = solarResponse.bodies;
    const jupiter = bodies.filter( item => item.englishName == "Jupiter" );
    const jupiterMoons = jupiter[0].moons;


    let largestMoonSize = 0;
    let largestMoon = {};

    for (let i = 0; i < jupiterMoons.length; i++) {
        const moonData = bodies.find(jupiterMoons[i].englishName);
        console.log(moonData);
        const moonSize = moonData.meanRadius;
        if (moonSize > largestMoonSize) {
            largestMoonSize = moonSize;
            largestMoon = moon;
        }
    }

    let scavangerResponse = await makeRequest(answerURL, "POST", "", { answer: largestMoon, player: player });
    console.log(scavangerResponse);


    progress["fifth"] = false;
    saveProgress(progress);
}

//#endregion