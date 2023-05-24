/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
import React from 'react';
import styles from './Aspirations.module.css';
import steps from '../../shared/aspiration-data';
import {Container, Typography} from '@mui/material';
import {Parallax} from 'react-parallax';
import {styled} from '@mui/material/styles';
import PhiKapsBanner from '../../images/PhiKapsBanner.jpg';
import {Stepper, Step, StepLabel} from '@mui/material';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 1,
    flex: 1,
  },
}));

const HorizontalStepper = () => {
  return (
    <div className={styles['horizontal-stepper']}>
      <Stepper activeStep={1} alternativeLabel connector={<ColorlibConnector/>}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={() => (
                <div className={styles['step-label']}>
                  <div className={styles['step-icon-container']}>
                    <div className={styles['step-icon']}>{step.icon}</div>
                  </div>
                  <div className={styles['step-label-text']}>
                    <h3 className={styles['step-title']}>{step.label}</h3>
                    <p className={styles['step-desc']}>{step.description}</p>
                  </div>
                </div>
              )}
            />
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

function Aspirations() {
  return (
    <React.Fragment>
      <Parallax
        blur={{min: -15, max: 15}}
        bgImage={PhiKapsBanner}
        bgImageAlt="Background"
        strength={500}
        className={styles.aspirations_header}
      >
        <div>
          <Container maxWidth="md" sx={{paddingTop: '20%'}}>
            <Typography variant="h2" align="center" sx={{marginBottom: '10%'}}
              className={styles.aspirations_title}>
                ASPIRATIONS
            </Typography>
          </Container>
        </div>
      </Parallax>
      <HorizontalStepper/>
    </React.Fragment>
  );
}

export default Aspirations;
