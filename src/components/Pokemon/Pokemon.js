import React, {useEffect, useState} from 'react';
import axios from "axios";


    const Pokemon = ({endpoint}) => {
    const [pokemonData, setPokemonData] = useState('');

    useEffect(() => {


        async function fetchData() {
            try {
                const result = await axios.get(endpoint)
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
        <div className="pokemon-container">
            {pokemonData && <>
                <h3>{pokemonData.name}</h3>
                <img src={pokemonData.sprites.front_default} alt="jigglypuff-image"/>
                <div className="weight-moves">
                    <h4>Moves: <span className="light">{pokemonData.moves.length}</span></h4>
                    <h4>Weight: <span className="light">{pokemonData.weight}</span></h4>
                </div>

                <h4>Abilities:</h4>
                {pokemonData.abilities.map((pokemon) => {
                    return (
                        <li>{pokemon.ability.name}</li>)
                })}
            </>}
        </div>
    )
}


export default Pokemon;