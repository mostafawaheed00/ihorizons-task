import React from 'react';
import { pokemonApi } from '../store/services/pokemon';

interface PokemonListProps {
  onSelectPokemon: (name: string) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const { data, error, isLoading } = pokemonApi.useGetPokemonListQuery();

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error loading Pokemon</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="divide-y divide-gray-200">
        {data?.results.map((pokemon) => (
          <button
            key={pokemon.name}
            onClick={() => onSelectPokemon(pokemon.name)}
            className="w-full px-4 py-3 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
              className="w-16 h-16"
              loading="lazy"
            />
            <span className="text-lg capitalize">{pokemon.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};