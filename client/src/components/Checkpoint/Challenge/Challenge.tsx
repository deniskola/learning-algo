import { Grid } from '@mui/material';
import  SortableListContainer  from './SortableListContainer'
import { useParams } from 'react-router-dom';
import VerticalLinearStepper from './Stepper';
import { useRef, useEffect } from 'react';
import ProgressInfo from './ProgressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';



const Challenge = () => {
    const challengeInfoRef = useRef<HTMLDivElement>(null);
    const challengeInfo = useSelector((state: RootState) => state.checkpoint.challengeInfo);

    useEffect(() => {
        const container = challengeInfoRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, [challengeInfo]);
    return (
        <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={12} >
                <ProgressInfo />
            </Grid>
            <Grid item xs={9}>
                <SortableListContainer />
            </Grid>
            <Grid item xs={3} style={{ maxHeight: '400px', overflowY: 'scroll' }} ref={challengeInfoRef} >
                <VerticalLinearStepper />
            </Grid>
        </Grid>
    );
}

export default Challenge;