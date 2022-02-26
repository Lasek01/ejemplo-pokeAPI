import React from 'react'

export default function PokeList({lista}){
  return(
    <div className="list-container">
      {lista.map(pokemon => {
        return(
          <div className="pokemon-name">
            <h3> {pokemon.name} </h3>
          </div>
        )
      })}
    </div>
  )
}