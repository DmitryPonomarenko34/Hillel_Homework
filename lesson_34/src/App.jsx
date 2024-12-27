import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { store, history } from './init/store';
import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
