import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { useEffect } from 'react'
import { useCallback, useState } from 'react'
import { Card } from './SortableItem'
import BubbleSort from '../../../helpers/BubbleSort'
import arraysEqual from '../../../utils/compareArraysOfObjects'
import { ChallengeInfo, Item, Items, SortingSteps, UserSortingSteps } from '../../../types/checkpoint'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setActiveStep, setChallengeInfo, setChallengeStatus, setCompleted, setErrorCounter, setStepCount } from '../../../redux/slices/checkpointSlice'

  
const SortableListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const challengeInfo = useSelector((state: RootState) => state.checkpoint.challengeInfo);
  const completed = useSelector((state: RootState) => state.checkpoint.completed);
  const errorCounter = useSelector((state: RootState) => state.checkpoint.errorCounter);
  const activeStep = useSelector((state: RootState) => state.checkpoint.activeStep);
  // const userSortingSteps = useSelector((state: RootState) => state.checkpoint.userSortingSteps);
  const challengeStatus = useSelector((state: RootState) => state.checkpoint.challengeStatus);
  const stepCount = useSelector((state: RootState) => state.checkpoint.stepCount);
  // const sortingSteps = useSelector((state: RootState) => state.checkpoint.sortingSteps);
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
  const [userSortingSteps, setUserSortingSteps]= useState<UserSortingSteps>([]);
  const [order, setOrder] = useState(cards.map((card) => card.id));
  // const [challengeStatus, setChallengeStatus] = useState<number>(0);
  // const [stepCount, setStepCount] = useState<number>(0);
  const [sortingSteps, setSortingSteps] = useState<SortingSteps>();
  const [countTimes, setCountTimes] = useState<number>(0);
  
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      }),
    )
  }, [])

  useEffect(() => {
    setOrder(cards.map((card) => card.id))
  }, [cards])

  const renderCard = useCallback(
    (card: { id: number; value: string }, index: number) => {
      return (
        
        <Card
          key={card.id}
          index={index}
          id={card.id}
          value={card.value}
          moveCard={moveCard}
        />
      )
    },
    [],
  )

  useEffect(() => {
    console.log(cards.filter((card) => order.includes(card.id)))
  }, [order])
  
  const goToNextStep = () => {
    var userSortingStep: any = cards;
    userSortingSteps.push(userSortingStep);
    setUserSortingSteps(userSortingSteps);
    dispatch(setStepCount(stepCount + 1));

    var tempChallengeInfo = [...challengeInfo];
    if(Array.isArray(sortingSteps) && sortingSteps[stepCount] && sortingSteps[stepCount].array){
      if(arraysEqual(sortingSteps[stepCount].array, userSortingSteps[stepCount])){
          tempChallengeInfo.push({message: "correct", swap : sortingSteps[stepCount].swap });
          dispatch(setChallengeInfo([...tempChallengeInfo]))
          dispatch(setCompleted(completed >= 100 ? 100 : completed + 100/sortingSteps.length));
      }else {
        tempChallengeInfo.push({message: "error", swap : sortingSteps[stepCount].swap });
          dispatch(setChallengeInfo([...tempChallengeInfo]))
          dispatch(setErrorCounter(errorCounter >= 100 ? 100 : errorCounter + 33.3))
      }
    }
    dispatch(setActiveStep(activeStep + 1));
  }
  const goBack = () =>{
    var tempCards = null;
    setUserSortingSteps(userSortingSteps.slice(0, -1));
    dispatch(setChallengeInfo(challengeInfo.slice(0, -1)));
    if(Array.isArray(sortingSteps) && sortingSteps[stepCount -2] && sortingSteps[stepCount -2].array){
      tempCards = sortingSteps[stepCount -2].array
      setCards([...tempCards])
    } 
    dispatch(setStepCount(stepCount -1));
  }

return (
  <>
    <DndProvider backend={HTML5Backend}>
      <div style={{width: 400,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'end'
                  }}>
                    {cards.map((card, i) => renderCard(card, i))}
      </div>
    </DndProvider>
    <button onClick={()=> console.log(challengeInfo)}>challengeInfo</button>
    {challengeStatus === 0 
        ? <button onClick={() => {dispatch(setChallengeStatus(1)) 
          BubbleSort(cards, setCountTimes, true, setSortingSteps)
        }}>START</button>
        : <button onClick={goToNextStep}>NEXT</button>
        }
        <button onClick={goBack}>GO BACK</button>
        <button onClick={()=> console.log(stepCount)}>stepCount</button>
  </>
  )
}

export default SortableListContainer;




