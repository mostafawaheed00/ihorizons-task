import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4 shadow-lg">
          <h1 className="text-2xl font-bold text-center capitalize">
            {selectedPokemon || 'PokeReact'}
          </h1>
        </header>
        
        <main className="container mx-auto py-8 px-4">
          {selectedPokemon ? (
            <PokemonDetail
              pokemonName={selectedPokemon}
              onBack={() => setSelectedPokemon(null)}
            />
          ) : (
            <PokemonList onSelectPokemon={setSelectedPokemon} />
          )}
        </main>
      </div>
    </Provider>
  );
}

export default App;