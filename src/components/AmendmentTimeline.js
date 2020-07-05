import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import FeedbackIcon from '@material-ui/icons/Feedback'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown'
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import BallotIcon from '@material-ui/icons/Ballot'

const useStyles = makeStyles({
  heading: {
    color: '#FFF',
    marginBottom: '3rem',
    textAlign: 'center',
  }, 
  root: {
    background: '#41B3A3',
  },
})

const AmendmentTimeline = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h2" className={classes.heading}>[ Charter Amendment Timeline ]</Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}
          date="June XX, 2020"
          iconStyle={{ background: '#fff', color: '#1C4E47' }}
          icon={<FeedbackIcon />}
        >
          <h3 className="vertical-timeline-element-subtitle">Amendment authors provide notice of intent to propose a Charter amendment at the next City Council meeting</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}
          date="June XX, 2020"
          iconStyle={{ background: '#1C4E47', color: '#fff' }}
          icon={<ThumbUpIcon />}
        >
          <h3 className="vertical-timeline-element-subtitle">
            Council unanimously approves proposal to amend the City Charter; proposal is moved to Charter Commission for consideration to be put on the November 2020 ballot
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="July 10, 2020"
          iconStyle={{ background: '#fff', color: '#1C4E47' }}
          icon={<RecordVoiceOverIcon />}
        >
          <h3 className="vertical-timeline-element-title">Charter amendment authors testify before the Charter Commission to make the case for why the Charter should be amended</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="July 11 - August 4, 2020"
          iconStyle={{ background: '#1C4E47', color: '#fff' }}
          icon={<EmojiPeopleIcon />}
        >
          <h3 className="vertical-timeline-element-title">Charter Commission provides opportunities for Public comment on the proposed Charter amendment</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="August 5, 2020"
          iconStyle={{ background: '#fff', color: '#1C4E47' }}
          icon={<ThumbsUpDownIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Charter Commission decides whether or not to add the Charter amendment proposal to the November 2020 ballot for a Public vote</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="August 6, 2020"
          iconStyle={{ background: '#1C4E47', color: '#fff' }}
          icon={<BallotIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Charter Commission's provides their decision/recommendation to the City Council</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="August XX"
          iconStyle={{ background: '#fff', color: '#1C4E47' }}
          icon={<ThumbsUpDownIcon />}
        >
          <h3 className="vertical-timeline-element-title">The City Council decides whether or not to follow the recommendation of the Charter Commission (which may or may not recommend to move the amendment to ballot); If the City Council approves the amendment to move it to ballot, the proposal goes to the Mayor for final approval</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="August 21, 2020"
          iconStyle={{ background: '#1C4E47', color: '#fff' }}
          icon={<ThumbsUpDownIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Mayor decides by the deadline August 21, 2020 whether or not to move the Charter amendment to ballot</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8E4982', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8E4982' }}        
          date="November 2020"
          iconStyle={{ background: '#fff', color: '#1C4E47' }}
          icon={<HowToVoteIcon />}
        >
          <h3 className="vertical-timeline-element-title">If the City Council and Mayor approve the Charter amendment to move to ballot, the Public will vote in November 2020 on whether or not to approve the Charter amendment</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}

export default AmendmentTimeline