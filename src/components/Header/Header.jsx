/* eslint-disable require-jsdoc */
import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import styles from './Header.module.css';
import pageTabs from '../../shared/page-tabs';

function Header() {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div"
            className={styles.header_title}>
            William Gillette
          </Typography>

          <div className={styles.button_container}>
            {pageTabs.map((item, index) => (
              <IconButton key={index} className={styles.nav_button}
                href={item.url}>
                {item.icon}
                <span className={styles.nav_button_text}>{item.text}</span>
              </IconButton>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
export default Header;
