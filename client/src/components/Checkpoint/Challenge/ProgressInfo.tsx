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
        <CircularProgressWithLabel value={completed}/>
        <CircularProgressWithLabel value={errorCounter} color="error"/>
      </Stack>
      <br />
      <Divider/>
    </div>
  );
}

export default ProgressInfo;