import { Grid } from '@mui/material';
import  SortableListContainer  from '../components/Checkpoint/Challenge/SortableListContainer'
import { useParams } from 'react-router-dom';
import VerticalLinearStepper from '../components/Checkpoint/Challenge/Stepper';
import { useState } from 'react';
import { ChallengeInfo } from '../types/checkpoint';
import ProgressInfo from '../components/Checkpoint/Challenge/ProgressInfo';



const Checkpoint = () => {
    const params = useParams();
    const [challengeInfo, setChallengeInfo] = useState<ChallengeInfo>([]);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [completed, setCompleted] = useState<number>(0);
    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <ProgressInfo completed={completed}/>
            </Grid>
            <Grid item xs={6}>
                <SortableListContainer 
                    challengeInfo={challengeInfo} 
                    setChallengeInfo={setChallengeInfo} 
                    setActiveStep={setActiveStep}
                    setCompleted={setCompleted}    
                />
            </Grid>
            <Grid item xs={4}>
                <VerticalLinearStepper challengeInfo={challengeInfo} activeStep={activeStep}/>
            </Grid>
        </Grid>
    );
}

export default Checkpoint;