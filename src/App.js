import React from 'react';
import { makeStyles } from '@material-ui/core'
import AmendmentFaq from './components/AmendmentFaq'
import AmendmentTimeline from './components/AmendmentTimeline'

const useStyles = makeStyles({
  root: {
    background: '#41B3A3',
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <AmendmentFaq /> */}
      <AmendmentTimeline />
    </div>
  );
}

export default App;
