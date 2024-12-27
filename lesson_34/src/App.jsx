import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './init/store';
import Home from './pages/Home';

const App = () => (
  <Router history={history}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
