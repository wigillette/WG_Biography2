/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {theme} from './themes';
import {ThemeProvider} from '@mui/material/styles';
import Home from './routes/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app-wrapper'>
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
