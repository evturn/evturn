import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data.json';
import { Contact } from './screens/Contact';
import { Main } from './screens/Main';
import { Software } from './screens/Software';
import { Work } from './screens/Work';
import { Nav } from './Navigation';
import styles from './index.css';

type Props = unknown;

export const App = (props: Props) => {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Nav menu={data.menu} />
        <Routes>
          <Route
            element={<Main />}
            path="/" />
          <Route
            element={<Contact />}
            path="/contact" />
          <Route
            element={<Software />}
            path="/software" />
          <Route
            element={<Work />}
            path="/work" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};