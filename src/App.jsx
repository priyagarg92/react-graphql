import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './pages/Searchbar';

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route strict exact path="/" element={<CharactersList />} />
          <Route strict exact path="/:id" element={<Character />} />
          <Route strict exact path="/search" element={<Searchbar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
