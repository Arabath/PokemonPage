import axios from 'axios';


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.com/api/v2/pokemon'
})

export default pokemonApi

