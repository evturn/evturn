import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data.json';
import { Contact } from './screens/Contact';
import { Main } from './screens/Main';
import { Nav } from './Navigation';

function App() {
  return (
    <BrowserRouter>
      <Nav menu={data.menu} />
      <Routes>
        <Route
          element={<Main />}
          path="/" />
        <Route
          element={<Contact />}
          path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
