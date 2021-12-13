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
                <h4 className="moves">Moves:</h4>
                {pokemonData.moves.length}
                <span className="box">
                    <h4>Weight:</h4>
                    {pokemonData.weight}
                </span>



                <h4>Abilities:</h4>
                {pokemonData.abilities.map((pokemon) => {
                    return (
                        <li className="ability">{pokemon.ability.name}</li>)
                })}
            </>}
        </div>
    )
}


export default Pokemon;