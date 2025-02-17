import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { PokemonDetail } from '../components/PokemonDetail';
import { pokemonApi } from '../store/services/pokemon';

const createTestStore = () =>
  configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

describe('PokemonDetail', () => {
  it('displays loading state when fetching Pokemon details', () => {
    render(
      <Provider store={createTestStore()}>
        <PokemonDetail pokemonName="pikachu" onBack={() => {}} />
      </Provider>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders nothing when no Pokemon is selected', () => {
    const { container } = render(
      <Provider store={createTestStore()}>
        <PokemonDetail pokemonName={null} onBack={() => {}} />
      </Provider>
    );
    
    expect(container).toBeEmptyDOMElement();
  });

  it('displays Pokemon details when data is loaded', async () => {
    render(
      <Provider store={createTestStore()}>
        <PokemonDetail pokemonName="pikachu" onBack={() => {}} />
      </Provider>
    );

    // Wait for the Pokemon name to appear
    const pokemonName = await screen.findByText('pikachu', { exact: false });
    expect(pokemonName).toBeInTheDocument();
    
    // Check for other Pokemon details
    expect(screen.getByText('Abilities')).toBeInTheDocument();
    expect(screen.getByText('← Back to list')).toBeInTheDocument();
  });
});