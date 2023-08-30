import "./resets.css"
import { Grid  } from '@mui/material';
import { QueryClientProvider, QueryClient } from 'react-query';
import Movies from './pages/movies';
import FiltersBar from "./components/filterBar";
import Filters_ctx from "./contexts/filtersContext";
import useFiltersContext from "./hooks/useFiltersContext";

function App() {
  const movieClient = new QueryClient();
  const filtersClient = new QueryClient();
  const filtersCtx = useFiltersContext();
  return (
    <>
      <Filters_ctx.Provider value={filtersCtx}>
        <QueryClientProvider client={filtersClient}>
          <FiltersBar/>
        </QueryClientProvider>
        <QueryClientProvider client={movieClient}>
          <Movies/>
        </QueryClientProvider>
      </Filters_ctx.Provider>
    </>
  )
}

export default App
