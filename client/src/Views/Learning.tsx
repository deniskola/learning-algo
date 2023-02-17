import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import data from "../MockData/mockData.json"

const Learning = () =>{
  
   
  
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={2}>
                <Card variant="outlined">
                <List>
                
          {data.challengeKinds.map((x) => (
            <ListItem  key={x.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
           
                  <InboxIcon /> 
            
                </ListItemIcon>
                <ListItemText primary={x.kind} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
                </Card>
            </Grid>
            <Grid item xs={10}>
                
                <div >
                {data.challengeKinds[0].modules.map((x) => (
                  
                    <Accordion variant="outlined">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{x} </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                              <Timeline
                                sx={{
                                  [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                  },
                                }}
                              >
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>Step 1</TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                  </TimelineSeparator>
                                  <TimelineContent>Step 2</TimelineContent>
                                </TimelineItem>
                              </Timeline>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                       
                      ))}
                 </div>
                    
                
                </Grid>
            </Grid>
        </div>
    )
}

export default Learning;