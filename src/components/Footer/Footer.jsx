/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Typography, Container, Box, IconButton, Divider} from '@mui/material';
import {Facebook, LinkedIn, YouTube, Instagram} from '@mui/icons-material';
import {useTheme} from '@mui/material/styles';
import styles from './Footer.module.css';

function Footer() {
  const theme = useTheme();
  const darkPrimary = theme.palette.primary.dark;
  return (
    <Box
      component="footer"
      className={styles.footer_container}
      sx={{
        backgroundColor: darkPrimary,
        padding: '20px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center" className={styles.copyright}>
          &copy; {new Date().getFullYear()} William Gillette Biography. All rights reserved.
        </Typography><br/>
        <Divider />
        <Box mt={2}>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize='large'/>
          </IconButton>
          <IconButton
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize='large'/>
          </IconButton>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube fontSize='large'/>
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize='large'/>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
