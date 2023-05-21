/* eslint-disable require-jsdoc */
import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import {Home, Favorite, Work, Folder} from '@mui/icons-material';
import styles from './Header.module.css';

function Header() {
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div"
            className={styles.header_title}>
            William Gillette
          </Typography>

          <div className={styles.button_container}>
            <IconButton className={styles.nav_button}>
              <Home/>
              <span className={styles.nav_button_text}>Overview</span>
            </IconButton>

            <IconButton className={styles.nav_button}>
              <Favorite />
              <span className={styles.nav_button_text}>Aspirations</span>
            </IconButton>

            <IconButton className={styles.nav_button}>
              <Work />
              <span className={styles.nav_button_text}>Portfolio</span>
            </IconButton>

            <IconButton className={styles.nav_button}>
              <Folder />
              <span className={styles.nav_button_text}>Experiences</span>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
