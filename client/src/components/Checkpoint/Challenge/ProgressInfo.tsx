import {useState} from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import CircularStatic from './CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';


interface ProgressInfoProps {
    completed: number,
}

const ProgressInfo:React.FC<ProgressInfoProps> = ({completed}) => {
    
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <CircularStatic value={completed}/>
      </Stack>
      <br />
      <Divider/>
    </div>
  );
}

export default ProgressInfo;