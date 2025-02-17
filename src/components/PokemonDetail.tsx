import React from 'react';
import { pokemonApi } from '../store/services/pokemon';

interface PokemonDetailProps {
  pokemonName: string | null;
  onBack: () => void;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonName, onBack }) => {
  const { data: pokemon, error, isLoading } = pokemonApi.useGetPokemonByNameQuery(
    pokemonName ?? '',
    { skip: !pokemonName }
  );

  if (!pokemonName) return null;

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error loading Pokemon details</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        ← Back to list
      </button>
      
      {pokemon && (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48"
          />
          
          <div className="mt-4 w-full">
            <div className="flex gap-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Height</h3>
                <p>{pokemon.height / 10}m</p>
              </div>
              <div>
                <h3 className="font-semibold">Weight</h3>
                <p>{pokemon.weight / 10}kg</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Abilities</h3>
              <ul className="list-disc list-inside">
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} className="capitalize">
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};