# Pokemon quest

This is an excersize in **using fetch**, but remember that we also have other methods and skills that should be aplied.
All answers should be found and answerd using code. 

We will be using the PokeAPI at https://pokeapi.co/  
Documentation at https://pokeapi.co/docs/v2 

You should answer Weight questions in Kg (the API responds with hecto grams).  
You should answer height questions in m (the API responds with decimeters),


**NB!** 
The pokemon API requiers that you cache requests. i.e. store a local copy of data that you have asked for, do not ask for it again. 

Output should be formated as 

```bash
Question: What color is the sky?
Answer: blue

Question: What are the colors of the rainbow?
Answer: red, orange, yellow, green, blue, indigo, violet and magic
```
These where example questions and answers.

Command for runing the application
```bash
node pokemon.mjs
```

## Questions

* What is the average height of all Pokemon in the first generation?
* Which Pokemon has the highest "Base Experience" among all Fire type Pokemon?
* How many different Pokemon possess the "Levitate" ability?
* Which Pokemon has the highest "Speed" stat among those that weigh less than 10kg?
* Which "Electric" type Pokemon has the shortest height?
* What is the heaviest Pokemon?
* What are the Pokemons with the longest names?

## Tips

* There are multiple API endpoints that will return difrently structured data, more apropriat to answering cirtain types of questions