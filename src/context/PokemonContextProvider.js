import axios from "axios"
import { createContext, useContext, useReducer } from "react"

export const pokemonContext = createContext()
export const usePokemons = () => useContext(pokemonContext)

const INIT_STATE = {
    pokemon: [],
    pokemonDetails: null
}

const ACTION = {
    GET_POKEMON: 'GET_POKEMON',
    GET_POKEMON_DETAILS: 'GET_POKEMON_DETAILS'
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case ACTION.GET_POKEMON:
            return {...state, pokemon: action.payload}
        case ACTION.GET_POKEMON_DETAILS:
                return {...state, pokemonDetails: action.payload}
        default:
            return state
    }
}

const PokemonContextProvider = ({children}) => {

    const API = 'https://pokeapi.co/api/v2/pokemon/'
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getPokemons() {
        const {data} = await axios(API)
        console.log(data.results)
        dispatch({
            type: ACTION.GET_POKEMON,
            payload: data.results
        })
    }

    const getProductDetails = async (id) => {
        dispatch({
            type: ACTION.GET_POKEMON_DETAILS,
            payload: null
        })
        const {data} = await axios(API)
        dispatch({
            type: ACTION.GET_POKEMON_DETAILS,
            payload: data
        })
    }

    async function deletePokemon(id) {
        await axios.delete(API)
        getPokemons()
    }


    const values ={
        getPokemons,
        pokemon: state.pokemon,
        deletePokemon,
        productDatels: state.pokemonDetails
    }

    return (
        <pokemonContext.Provider value={values}>
            {children}
        </pokemonContext.Provider>
    )
}

export default PokemonContextProvider