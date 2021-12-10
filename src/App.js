import axios from "axios";
import './App.css';
import React, {useState, useEffect} from "react";
import Pokemon from "./components/Pokemon";


function App() {

    const [pokemonData, setPokemonData] = useState('');
    // const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
    const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon`);


    useEffect(() => {


    async function fetchData() {
        try {
            const result = await axios.get(endPoint)
            console.log(result.data);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    fetchData()

}, [endPoint])

  return (
      // <Pokemon endpoint={endPoint}/>
      <div>
          <button type="button" onClick={() => setEndPoint(pokemonData.previous)}>Vorige</button>
          <button type="button" onClick={() => setEndPoint(pokemonData.next)}>Volgende</button>


          {pokemonData && <>
              {pokemonData.results.map((pokemon) => {
                  return (
                      <Pokemon key={pokemon.name} endpoint={pokemon.url} />
                  )
              })}
          </>}
      </div>

  );
}

export default App;
