import axios from "axios";
import './App.css';
// import './Button.css';
import React, {useState, useEffect} from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Button from "./components/Button/Button"
import './components/Pokemon/Pokemon.css';
import logo from './assets/logo.png'


function App() {

    const [pokemonData, setPokemonData] = useState('');
    // const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
    const [endPoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        async function fetchData() {
            setLoading(true);

            try {
                const result = await axios.get(endPoint)
                console.log(result.data);
                setPokemonData(result.data);
                console.log(endPoint)

            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }

        fetchData()

    }, [endPoint])
    if (loading) return `loading...`

    return (
        // <Pokemon endpoint={endPoint}/>
        <div className="container">
            <img src={logo} alt="pokemon-logo" className="logo"/>
            <span>
                <Button type="button" className="buttons" nameOfButton="Vorige"
                        onClick={() => setEndPoint(pokemonData.previous)}
                        onDisabled={endPoint === 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'}/>
                <Button type="button" className="buttons" nameOfButton="Volgende"
                        onClick={() => setEndPoint(pokemonData.next)}/>
            </span>

            <div className="pokemon-cards">
                {pokemonData && <>
                    {pokemonData.results.map((pokemon) => {
                        return (
                            <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                        )
                    })}
                </>}
            </div>
        </div>

    );
}

export default App;
