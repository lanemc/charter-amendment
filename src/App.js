import React from 'react';
import { makeStyles, Grid } from '@material-ui/core'
import AmendmentFaq from './components/AmendmentFaq'
import AmendmentTimeline from './components/AmendmentTimeline'
import Background from './images/mainbg.png'

const App = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid className={classes.faq}>
        <AmendmentFaq />
      </Grid>
      <AmendmentTimeline />
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    background: '#41B3A3',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
  },
})

export default App;
