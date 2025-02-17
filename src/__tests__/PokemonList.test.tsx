import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { PokemonList } from '../components/PokemonList';
import { pokemonApi } from '../store/services/pokemon';

const createTestStore = () =>
  configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

describe('PokemonList', () => {
  it('displays loading state initially', () => {
    render(
      <Provider store={createTestStore()}>
        <PokemonList onSelectPokemon={() => {}} />
      </Provider>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('calls onSelectPokemon when a Pokemon is clicked', async () => {
    const mockOnSelect = vi.fn();
    
    render(
      <Provider store={createTestStore()}>
        <PokemonList onSelectPokemon={mockOnSelect} />
      </Provider>
    );

    // Wait for the data to load and click the first Pokemon
    const firstPokemon = await screen.findByText('bulbasaur', { exact: false });
    fireEvent.click(firstPokemon);
    
    expect(mockOnSelect).toHaveBeenCalledWith('bulbasaur');
  });
});