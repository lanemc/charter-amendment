import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, makeStyles, Grid, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const AmendmentFaq = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.faqContainer}>
      <Typography variant="h2" className={classes.faqHeading}>[ Charter Amendment FAQ ]</Typography>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is the Charter amendment?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why amend the Charter?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why amend the Charter without a plan for what’s next?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the Charter amendment passes in November, what happens next?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why shouldn’t we just figure out the new Department of Community Safety structure/policies FIRST and then amend the Charter?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What happens if the Charter amendment fails in November?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Does the Charter amendment get rid of police/enforcement services in our city?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the Charter amendment passes in November, what happens with law enforcement?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why does the city council hate the police department?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Not all police are bad. Why is the City Council punishing the whole police department?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why doesn’t the City Council support the first Black police chief?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why does the City Council want to take away power from the first Black police chief?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Isn’t this amendment just further tying the hands of the police department, preventing them from doing their job?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the amendment is a good idea, why do some Black community leaders say it’s not?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>The words “abolish” and “dismantle” make me uncomfortable. Why can’t we call it something else?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>I support police reform. Why do we have to change the Charter when we could just institute police reforms?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Changing the Charter will create a Wild West scenario. Why does the City Council support lawlessness?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>I understand the idea of violence prevention, but what will be done to address the crime and gun violence we face every day?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>When criminals hear that the Council is dismantling the police department, they will descend on Minneapolis.</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why do the Council and Mayor disagree on strategy for making changes in the police department?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the Charter amendment passes, will the Council be in charge of the police department?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the amendment does NOT pass, could the Council just ignore the vote, i.e. are there other avenues to defund the police?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Has the Charter been changed before?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>If the Charter amendment passes, could the next Council change it back?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Can the Mayor or Council veto the outcome of the ballot vote?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>                        
      <Accordion TransitionProps={{ unmountOnExit: true }} className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionBackground}
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What can I do to support the Charter amendment?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBackground}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

const useStyles = makeStyles({
  accordion: {
    color: '#FFF',
    width: '100%',
  },
  accordionBackground: {
    backgroundColor: '#1C4E47',
  },
  expandIcon: {
    color: '#FFF',
  }, 
  faq: {
    'section.faq-row': {
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
    },
  },
  faqContainer: {
    marginBottom: '3rem',
    marginTop: 100,
    maxWidth: 800,
  },
  faqHeading: {
    color: '#FFF',
    marginBottom: '3rem',
  },
  heading: {
    fontSize: '1.5rem',
  },  
})

export default AmendmentFaq