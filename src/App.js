/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {theme} from './themes';
import {ThemeProvider} from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './routes/Home/Home';
import Aspirations from './routes/Aspirations/Aspirations';
import Portfolio from './routes/Portfolio/Portfolio';
import Experiences from './routes/Experiences/Experiences';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/aspirations',
    element: <Aspirations/>,
  },
  {
    path: '/portfolio',
    element: <Portfolio/>,
  },
  {
    path: '/experiences',
    element: <Experiences/>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app-wrapper'>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
