import './App.css';
import HeroesFeatured from './components/HeroesFeatured/HeroesFeatured';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <main className='container'>
        <HeroesFeatured />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
