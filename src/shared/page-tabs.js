import {Home, Favorite, Work, Folder} from '@mui/icons-material';

const pageTabs = [
  {
    icon: <Home />,
    text: 'Overview',
    url: '/home',
  },
  {
    icon: <Favorite />,
    text: 'Aspirations',
    url: '/aspirations',
  },
  {
    icon: <Work />,
    text: 'Portfolio',
    url: '/portfolio',
  },
  {
    icon: <Folder />,
    text: 'Experiences',
    url: '/experiences',
  },
];

export default pageTabs;
