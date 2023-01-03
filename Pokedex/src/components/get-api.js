import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PokemonInfo = ({ name }) => {
const [pokemon, setPokemon] = useState(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
    } catch (error) {
        console.error(error);
    }
    };
    fetchData();
}, [name]);

if (!pokemon) {
    return <Text>Chargement en cours...</Text>;
}

return (
    <View>
    <Text>Nom: {pokemon.name}</Text>
    <Text>Poids: {pokemon.weight}</Text>
    <Text>Taille: {pokemon.height}</Text>
    <Text>Types: {pokemon.types.map(t => t.type.name).join(', ')}</Text>
    </View>
);
};

export default PokemonInfo;
