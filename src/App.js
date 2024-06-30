import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Main.css';
import Home from './Components/Home/Home';
import Movies from './Components/MoviesPage/Movies'
import Series from './Components/SeriesPage/Series'

function App() {
  return (
      <Router>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series />}/>
         </Routes>
      </Router>
  );
}

export default App;
   