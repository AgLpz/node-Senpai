const fetch = require("node-fetch");

async function  getSwapi(){
    try {
        const getSwapiPeople = await fetch("https://swapi.dev/api/people/1");
        const character = await getSwapiPeople.json();
        console.log(character);
        return character;
    } catch(error) {}
}
getSwapi();

