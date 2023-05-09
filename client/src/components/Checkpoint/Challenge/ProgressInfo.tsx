import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgress';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useParams } from 'react-router-dom';


const ProgressInfo:React.FC = () => {
  
  const completed = useSelector((state: RootState) => state.checkpoint.completed);
  const errorCounter = useSelector((state: RootState) => state.checkpoint.errorCounter);
  const currentCheckpoint = useSelector((state: RootState) => state.currentModule.currentCheckpoint);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5" display="block" sx={{ m: 2 }}>
            {currentCheckpoint.title}
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