/* eslint-disable require-jsdoc */
// import styles from './HomeMedia.module.css';
import {PropTypes} from 'prop-types';
import {IconButton, Card, CardActions,
  CardContent, CardMedia, Typography} from '@mui/material';
import {Share, TravelExplore} from '@mui/icons-material';
import styles from './HomeMedia.module.css';

function HomeMedia({title, desc, img}) {
  return (
    <Card className={styles.card}>
      <CardMedia component='img' alt={title} height='200' image={img}/>
      <CardContent>
        <Typography gutterBottom variant='h5'
          component='div' className={styles.card_title}>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'
          className={styles.card_desc}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions className={styles.card_actions}>
        <IconButton aria-label='share' size='small'>
          <Share />
          <span className={styles.card_action_label}>Share</span>
        </IconButton>
        <IconButton aria-label='learn' size='small'>
          <TravelExplore />
          <span className={styles.card_action_label}>Learn More</span>
        </IconButton>
      </CardActions>
    </Card>
  );
}

HomeMedia.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HomeMedia;
