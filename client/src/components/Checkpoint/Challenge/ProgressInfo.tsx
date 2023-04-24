import {useState} from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';


interface ProgressInfoProps {
    completed: number,
    errorCounter: number
}

const ProgressInfo:React.FC<ProgressInfoProps> = ({completed, errorCounter}) => {
    
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5" display="block" sx={{ m: 2 }}>
            Challenge Name
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="caption" display="block" sx={{ m: 2 }}>
            <b>completed:</b>
          </Typography>
          <CircularProgressWithLabel value={completed}/>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="caption" display="block" sx={{ m: 2 }}>
            <b>errors:</b>
          </Typography>
          <CircularProgressWithLabel value={errorCounter} color="error"/>
        </Box>
        <Divider orientation="vertical" flexItem />
      </Stack>
      <br />
      <Divider/>
    </div>
  );
}

export default ProgressInfo;