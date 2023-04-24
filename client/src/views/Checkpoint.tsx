import { Divider, Grid } from '@mui/material';
import  SortableListContainer  from '../components/Checkpoint/Challenge/SortableListContainer'
import { useParams } from 'react-router-dom';
import VerticalLinearStepper from '../components/Checkpoint/Challenge/Stepper';
import { useState, useRef, useEffect } from 'react';
import { ChallengeInfo } from '../types/checkpoint';
import ProgressInfo from '../components/Checkpoint/Challenge/ProgressInfo';



const Checkpoint = () => {
    const params = useParams();
    const challengeInfoRef = useRef<HTMLDivElement>(null);
    const [challengeInfo, setChallengeInfo] = useState<ChallengeInfo>([]);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [completed, setCompleted] = useState<number>(0);
    const [errorCounter, setErrorCounter] = useState<number>(0);

    useEffect(() => {
        const container = challengeInfoRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, [challengeInfo]);
    return (
        <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={12} >
                <ProgressInfo completed={completed} errorCounter={errorCounter}/>
            </Grid>
            <Grid item xs={9}>
                <SortableListContainer 
                    challengeInfo={challengeInfo} 
                    setChallengeInfo={setChallengeInfo} 
                    setActiveStep={setActiveStep}
                    setCompleted={setCompleted}  
                    setErrorCounter={setErrorCounter}  
                />
            </Grid>
            <Grid item xs={3} style={{ maxHeight: '400px', overflowY: 'scroll' }} ref={challengeInfoRef} >
                <VerticalLinearStepper challengeInfo={challengeInfo} activeStep={activeStep} />
            </Grid>
        </Grid>
    );
}

export default Checkpoint;