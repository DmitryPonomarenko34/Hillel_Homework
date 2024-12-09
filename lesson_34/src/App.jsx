import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { store, history } from './store';

const App = () => (
  <Router history={history}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
