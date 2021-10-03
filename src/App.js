import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
