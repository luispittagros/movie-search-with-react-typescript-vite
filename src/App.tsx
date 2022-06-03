import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '@/Routes';
import { Provider } from 'jotai';

const App = () => {
  return (
    <Provider>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
