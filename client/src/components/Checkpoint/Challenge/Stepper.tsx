import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ChallengeInfo } from '../../../types/checkpoint';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const VerticalLinearStepper:React.FC = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: RootState) => state.checkpoint.activeStep);
  const challengeInfo = useSelector((state: RootState) => state.checkpoint.challengeInfo);
  
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {challengeInfo.map((step, index) => (
          <Step key={index}>
            <StepLabel
                optional={
                    step.swap ? <Typography variant="caption" color={step.message === 'error' ? 'error': 'grey'}>swap {step.swap.item1} with {step.swap.item2}</Typography>
                    : <Typography variant="caption" color={step.message === 'error' ? 'error': 'grey'}>no swap</Typography>
                }
                error={step.message === 'error'}
              
            >
              {step.message}
            </StepLabel>
            <StepContent>
              <Typography>lorem ipsum</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === challengeInfo.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}

export default VerticalLinearStepper;