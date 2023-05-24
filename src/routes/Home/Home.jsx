/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
import HomeMedia from '../../components/HomeMedia/HomeMedia';
import mediaContent from '../../shared/media-content';
import {Avatar, Card, CardContent, Container,
  Divider,
  Grid, Typography} from '@mui/material';
import headshot from '../../images/Headshot.jpg';
import styles from './Home.module.css';
// import {useStyles} from '@mui/styles';

function Home() {
  // const classes = useStyles();
  return (
    <Container>
      <div className={styles.overview_container}>
        <Avatar alt="Headshot Image" src={headshot}
          sx={{width: 300, height: 300}} className={styles.avatar_headshot} />
        <br/>
        <Card className={styles.overview_info}>
          <CardContent>
            <Typography variant='h4' component='div'
              className={styles.info_title}>
              BIOGRAPHY
            </Typography>
            <Typography variant='body1' color='text.secondary'
              className={styles.info_body}>
              William is an incoming senior at Ursinus College who is
              majoring in Computer Science and Mathematics and minoring
              in Statistics. His primary academic interest is applying tools
              from computer science and mathematics to aid in conducting
              statistical analyses on datasets. In his leisure time, he
              enjoys distance running, working on various coding projects,
              playing strategy-based video games, and catching up with his
              fraternity brothers.
            </Typography>
          </CardContent>
        </Card>
      </div><br/>
      <Divider variant='middle'>RECENT UPDATES</Divider><br/>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} className='row'> */}
        {mediaContent.map((contentEntry, index) =>
          <Grid item md={4} sm={6} xs={8} className='col' key={index}>
            <HomeMedia title={contentEntry.title}
              desc={contentEntry.description} img={contentEntry.image} />
          </Grid>)}
        {/* </Grid> */}
      </Grid>
    </Container>
  );
}

export default Home;
