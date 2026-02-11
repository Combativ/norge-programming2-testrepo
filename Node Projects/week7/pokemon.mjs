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
    let averageHeight = totalHeight / numPokemonInFirstGeneration;
    
    console.log(`Answer: ${averageHeight}`)

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
    
    
    
}



await question1();
await question2();
// question3();
// question4();
// question5();
// question6();
// question7();


// * What is the average height of all Pokemon in the first generation?
// * Which Pokemon has the highest "Base Experience" among all Fire type Pokemon?
// * How many different Pokemon possess the "Levitate" ability?
// * Which Pokemon has the highest "Speed" stat among those that weigh less than 10kg?
// * Which "Electric" type Pokemon has the shortest height?
// * What is the heaviest Pokemon?
// * What are the Pokemons with the longest names?