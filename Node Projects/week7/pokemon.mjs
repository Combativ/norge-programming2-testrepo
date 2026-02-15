import { fetchAndCache } from './cache.mjs';

const baseURL = "https://pokeapi.co/api/v2";

console.clear();


async function question1() {

    console.log("Question: What is the average height of all Pokemon in the first generation?");

    const numPokemonInFirstGeneration = 151;
    let totalHeight = 0;
    
    for (let i = 1; i <= numPokemonInFirstGeneration; i++) {
        const url = `${baseURL}/pokemon/${i}/`;
        const pokemon = await fetchAndCache(url);
        if (pokemon) {
            let height = pokemon.height;
            totalHeight += height;
        }
    }
    let averageHeight = (totalHeight / numPokemonInFirstGeneration) / 10; // convert from decimeters to meters
    
    console.log(`Answer: ${averageHeight}m`)

}


async function question2() {

    console.log("Question: Which Pokemon has the highest Base Experience among all Fire type Pokemon?");

    const url = `${baseURL}/type/10/`; // index 10 is the fire type in the api
    const response = await fetchAndCache(url);

    const firePokemon = response.pokemon; // list of all fire pokemon

    let highestBaseExperience = 0;
    let highestBaseExperiencePokemonName = "";


    for (let i = 0; i < firePokemon.length; i++) {

        const url = firePokemon[i].pokemon.url;
        const pokemonData = await fetchAndCache(url);
        
        if (pokemonData.base_experience > highestBaseExperience) {
            highestBaseExperience = pokemonData.base_experience;
            highestBaseExperiencePokemonName = pokemonData.name;
        }

    }
    
    console.log(`Answer: ${highestBaseExperiencePokemonName}`);

}


async function question3() {

    console.log("Question: How many different Pokemon possess the Levitate ability?");

    const url = `${baseURL}/ability/26/`; // index 26 is the levitate ability in the api
    const response = await fetchAndCache(url);

    const pokemonWithLevitateAbility = response.pokemon; // list of all pokemon with the levitate ability

    const result = pokemonWithLevitateAbility.length;

    console.log(`Answer: ${result}`);
    
}


async function question4() {

    console.log("Question: Which Pokemon has the highest Speed stat among those that weigh less than 10kg?")

    // Prepare variables
    let highestSpeed = 0;
    let highestSpeedPokemonName = "";
    const response = await fetchAndCache(`${baseURL}/pokemon/?limit=2000`) //extend the limit to fetch all Pokemon
    const allPokemon = response.results;

    for (let i = 0; i < allPokemon.length; i++) {
        const url = allPokemon[i].url;
        const pokemon = await fetchAndCache(url);
        const weight = pokemon.weight;
        const speed = pokemon.stats[5].base_stat;

        if (weight < 100 && speed > highestSpeed) { // 10kg = 100 hectograms
            highestSpeed = speed;
            highestSpeedPokemonName = pokemon.name;
        }
    }
    
    console.log(`Answer: ${highestSpeedPokemonName}`);
}


async function question5() {

    console.log("Question: Which 'Electric' type Pokemon has the shortest height?");

    const url = `${baseURL}/type/13/`; // index 13 is the fire type in the api
    const response = await fetchAndCache(url);

    const electricPokemon = response.pokemon; // list of all electric type Pokemon

    let shortestHeight = Infinity;
    let shortestHeightPokemonName = "";


    for (let i = 0; i < electricPokemon.length; i++) {

        const url = electricPokemon[i].pokemon.url;
        const pokemonData = await fetchAndCache(url);
        
        if (pokemonData.height < shortestHeight) {
            shortestHeight = pokemonData.height;
            shortestHeightPokemonName = pokemonData.name;
        }
    }
    
    console.log(`Answer: ${shortestHeightPokemonName}`);

}


async function question6() {

    console.log("Question: What is the heaviest Pokemon?");

    let highestWeight = 0;
    let highestWeightPokemonName = "";

    const url = `${baseURL}/pokemon/?limit=2000`;
    const response = await fetchAndCache(url);
    const allPokemon = response.results;

    for (let i = 0; i < allPokemon.length; i++) {
        const url = allPokemon[i].url;
        const pokemonData = await fetchAndCache(url);
        const weight = pokemonData.weight;

        if (weight > highestWeight) {
            highestWeight = weight;
            highestWeightPokemonName = pokemonData.name;
        }
    }
    
    console.log(`Answer: ${highestWeightPokemonName}`);

}


async function question7() {

    console.log("What are the Pokemon with the longest names?");

    let longestName = 0;
    let longestNamePokemon = [];

    const url = `${baseURL}/pokemon/?limit=2000`;
    const response = await fetchAndCache(url);
    const allPokemon = response.results;

    // method: Enter the name of every Pokemon which name is the length of 'longestName'.
    // Every time we find a longer name, clear the array and update 'longestName'
    for (let i = 0; i < allPokemon.length; i++) {
        
        const url = allPokemon[i].url;
        const pokemonData = await fetchAndCache(url);
        const name = pokemonData.name;

        if (name.length > longestName) {
            longestName = name.length;
            longestNamePokemon = [];
        }
        if (name.length === longestName) {
            longestNamePokemon.push(name);
        }

    }

    console.log(`Answer: ${longestNamePokemon}`);

}



await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();