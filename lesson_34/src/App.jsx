import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { store, history } from './init/store';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AppLayout from './components/AppLayout';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

export default App;
