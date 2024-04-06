import React, { useEffect } from 'react'
import { usePokemons } from '../../context/PokemonContextProvider'
import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonList = () => {
    const {getPokemons, pokemon} = usePokemons()

    useEffect(() => {
        getPokemons()
        console.log(pokemon)
    }, [])

  return (
    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}} >
        {pokemon ? (
            pokemon.map((item) => (
                <PokemonCard card={item} key={item.id} />
            ))
        ) : (<h1>Пусто</h1>)}
    </div>
  )
}

export default PokemonList