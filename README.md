# PokeReact

A modern React application that displays Pokémon information using the PokeAPI. Built with React, TypeScript, Redux Toolkit, and RTK Query.

## Features

- List view of all Pokémon with sprites
- Detailed view for each Pokémon
- State management with Redux Toolkit
- API integration using RTK Query
- Fully typed with TypeScript
- Responsive design with Tailwind CSS
- Unit tests for components

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

1. Clone the repository
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Environment Variables

- `VITE_API_BASE_URL`: The base URL for the Pokemon API (default: https://pokeapi.co/api/v2)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint

## Testing

The application includes unit tests for both the list and detail views. Run the tests with:

```bash
npm run test
```

## Project Structure

```
src/
├── components/          # React components
├── store/              # Redux store and RTK Query services
├── __tests__/          # Unit tests
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## API Configuration

The application uses environment variables for API configuration. To use a different API:

1. Create a `.env` file in the root directory
2. Set the `VITE_API_BASE_URL` variable to your API endpoint
3. Restart the development server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request