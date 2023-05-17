import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeroesFeatured from './components/HeroesFeatured/HeroesFeatured';
import Nav from './components/Nav/Nav';
import SearchView from './components/SearchView/SearchView';
import './styles/globals.scss';
import './styles/reset.scss';
import HeroDetailed from './components/HeroDetailed/HeroDetailed';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className='container'>
        <Routes>
          <Route path='/hero/:id' element={<HeroDetailed />} />
          <Route path='/search/:name' element={<SearchView />} />
          <Route path='/search/' element={<HeroesFeatured />} />
          <Route path='/*' element={<HeroesFeatured />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
