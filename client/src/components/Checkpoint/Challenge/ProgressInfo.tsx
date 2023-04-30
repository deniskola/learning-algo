import {useState} from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const ProgressInfo:React.FC = () => {
  const completed = useSelector((state: RootState) => state.checkpoint.completed);
  const errorCounter = useSelector((state: RootState) => state.checkpoint.errorCounter);
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