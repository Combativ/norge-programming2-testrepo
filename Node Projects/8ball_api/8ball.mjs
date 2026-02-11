import assert from "node:assert"

const baseURL = "https://eightballapi.com";
const baseAPI_EndPoint = "api";


const requestURL = `${baseURL}/${baseAPI_EndPoint}`;


const question = process.argv.slice(2);

console.clear();
console.log(`Question: ${question} ?`);

let response = await fetch(requestURL, {method: "GET"});
response = await response.json();

console.log(`🎱 ${response.reading}`);