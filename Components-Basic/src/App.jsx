import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';

function App() {
 
  return (
    <>
      <MovieList heading="Movies List" moviesData={movies}/>

      <Timer start={5}/>

      <Counter/>
    </>
  )
}

export default App
