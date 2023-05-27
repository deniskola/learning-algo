import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import ExtensionIcon from '@mui/icons-material/Extension';

const Module = ({mod}:any) => {

    return (
        <div>
          <Accordion variant="outlined">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>{mod.name} </Typography>
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
                    {mod.steps.map((x:any) => (
                      <>
                      
                    <TimelineItem>  
                      <TimelineSeparator>
                        {x.contentType === 'lesson' ? <ArticleIcon/> :
                        x.contentType === 'algo-visualization' ? <BarChartIcon /> :
                        <ExtensionIcon />
                        }
                        <TimelineConnector />
                      </TimelineSeparator>
                      <Link to={`${mod.id}/${x.id}`} style={{ textDecoration: 'none' }}>
                        <Typography>
                          &nbsp;{x.name}
                        </Typography>
                      </Link>
                    </TimelineItem>
                    
                     </>
                    ))}
                  </Timeline>
                </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
        </div>
    );
}

export default Module;