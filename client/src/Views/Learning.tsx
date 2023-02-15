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
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
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
                        <Typography>{x}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
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