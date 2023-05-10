import { Grid } from '@mui/material';
import  SortableListContainer  from './SortableListContainer'
import VerticalLinearStepper from './Stepper';
import { useRef, useEffect, useState } from 'react';
import ProgressInfo from './ProgressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import PopupWithBackdrop from '../../Shared/PopupWithBackdrop';
import { setChallengeStatus } from '../../../redux/slices/checkpointSlice';
import BubbleSort from '../../../helpers/BubbleSort';
import { Items, SortingSteps } from '../../../types/checkpoint';



const Challenge = () => {
    const challengeInfoRef = useRef<HTMLDivElement>(null);
    const challengeInfo = useSelector((state: RootState) => state.checkpoint.challengeInfo);
    const [sortingSteps, setSortingSteps] = useState<SortingSteps>();
    const [countTimes, setCountTimes] = useState<number>(0);
    const currentCheckpoint = useSelector((state: RootState) => state.currentModule.currentCheckpoint);
    const dispatch = useDispatch();
    const [cards, setCards] = useState<Items>([
        {
          id: 0,
          value: '1',
        },
        {
          id: 1,
          value: '2',
        },
        {
          id: 2,
          value: '5',
        },
        {
          id: 3,
          value: '2',
        },
        {
          id: 4,
          value: '4',
        },
        {
          id: 5,
          value: '3',
        },
        {
          id: 6,
          value: '1',
        },
      ])

    useEffect(() => {
        const container = challengeInfoRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, [challengeInfo]);


    const handleClosePopup = () => (
        BubbleSort(cards, setCountTimes, true, setSortingSteps)
    );
    return (
        <>
            <PopupWithBackdrop 
                title={currentCheckpoint.title}
                content="test popup content"
                buttonText="START"
                handleClose={handleClosePopup}
            />
            <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={12} >
                    <ProgressInfo />
                </Grid>
                <Grid item xs={9}>
                    <SortableListContainer cards={cards} setCards={setCards} sortingSteps={sortingSteps}/>
                </Grid>
                <Grid item xs={3} style={{ maxHeight: '400px', overflowY: 'scroll' }} ref={challengeInfoRef} >
                    <VerticalLinearStepper />
                </Grid>
            </Grid>
        </>
    );
}

export default Challenge;