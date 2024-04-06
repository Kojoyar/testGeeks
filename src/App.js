import React from 'react'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonContextProvider from './context/PokemonContextProvider'

function App() {
  return (
    <div>
        <h1 style={{textAlign: 'center'}} >GeeksPro фотки не отображаются хотя img оно приходит </h1>

      <PokemonContextProvider>
         <PokemonList/>
      </PokemonContextProvider>
    </div>
  )
}

export default App