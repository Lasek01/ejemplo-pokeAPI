import React, {useEffect, useState} from "react";
import "./style.css";
import PokeList from './PokeList';

export default function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect( () => {
    getPokemons();
  } , [])

  const getPokemons = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=150'
    fetch(URL)
    .then( response => response.json())
    .then(response => {
      return(setPokemons(response.results))
    })
  }

  return (
    <div>
      <h1> 20 Pokemons </h1>
      <hr/>
      <PokeList lista={pokemons}/>
    </div>
  );
}
