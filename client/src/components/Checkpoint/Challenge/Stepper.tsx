import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ChallengeInfo } from '../../../types/checkpoint';

interface VerticalLinearStepperProps {
    challengeInfo: ChallengeInfo;
    activeStep: number
}
const VerticalLinearStepper:React.FC<VerticalLinearStepperProps> = ({challengeInfo ,activeStep}) => {
  
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {challengeInfo.map((step:string, index:number) => (
          <Step key={index}>
            <StepLabel
            //   optional={
            //     index === 2 ? (
            //       <Typography variant="caption">Last step</Typography>
            //     ) : null
            //   }
            >
              {step}
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