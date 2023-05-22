/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
import styles from './Aspirations.module.css';
// import aspirationsData from '../../shared/aspiration-data';
import {Container, Typography} from '@mui/material';
import {Parallax} from 'react-parallax';
import PhiKapsBanner from '../../images/PhiKapsBanner.jpg';
import {useTheme} from '@mui/material';

function Aspirations() {
  const theme = useTheme();
  const textColor = theme.palette.primary.light;
  return (
    <div>
      <Parallax
        blur={{min: -15, max: 15}}
        bgImage={PhiKapsBanner}
        bgImageAlt="Background"
        strength={500}
      >
        <div style={{height: '500px'}}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color={textColor}
              sx={{paddingTop: '200px'}}
              className={styles.aspirations_title}>
              ASPIRATIONS
            </Typography>
          </Container>
        </div>
      </Parallax>

      {/* {aspirationsData.map((aspiration, index) => (
        <Parallax
          key={index}
          blur={{min: -10, max: 10}}
          bgImage={aspiration.imageUrl}
          bgImageAlt={aspiration.title}
          strength={-200}
        >
          <div style={{height: '500px'}}>
            <Container maxWidth="md">
              <Typography variant="h4" align="center"
                color="primary" sx={{paddingTop: '200px'}}>
                {aspiration.title}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary">
                {aspiration.description}
              </Typography>
            </Container>
          </div>
        </Parallax>
      ))} */}

    </div>
  );
}

export default Aspirations;
