import axios from "axios";
import './App.css';
import React, {useState, useEffect} from "react";
import Pokemon from "./components/Pokemon";


function App() {

    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
    // const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`);


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
    console.log('start!');
}, [])

  return (
      <Pokemon endpoint={endPoint}     />

  );
}

export default App;
