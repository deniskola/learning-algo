import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { useEffect } from 'react'
import { useCallback, useState } from 'react'
import { Card } from './SortableItem'
import { Grid } from '@mui/material'
import BubbleSort from '../../../helpers/BubbleSort'
import arraysEqual from '../../../utils/compareArraysOfObjects'
import VerticalLinearStepper from './Stepper'
import { ChallengeInfo, Item, Items, SortingSteps, UserSortingSteps } from '../../../types/checkpoint'


const SortableListContainer: React.FC = () => {
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
  const [challengeStatus, setChallengeStatus] = useState<number>(0);
  const [stepCount, setStepCount] = useState<number>(0);
  const [challengeInfo, setChallengeInfo] = useState<ChallengeInfo>([]);
  const [sortingSteps, setSortingSteps] = useState<SortingSteps>();
  const [countTimes, setCountTimes] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
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
    userSortingSteps.push(userSortingStep)
    setUserSortingSteps(userSortingSteps);
    setStepCount(stepCount + 1)

    var tempChallengeInfo = [...challengeInfo];
    if(Array.isArray(sortingSteps) && sortingSteps[stepCount] && sortingSteps[stepCount].array){
      if(arraysEqual(sortingSteps[stepCount].array, userSortingSteps[stepCount])){
          tempChallengeInfo.push({message: "correct", swap : sortingSteps[stepCount].swap });
          setChallengeInfo([...tempChallengeInfo])
      }else {
        tempChallengeInfo.push({message: "error", swap : sortingSteps[stepCount].swap });
          setChallengeInfo([...tempChallengeInfo])
      }
    }
    setActiveStep((prevActiveStep:number) => prevActiveStep + 1);
  }

return (
  <>
  
  <Grid container spacing={2}>
  <Grid item xs={8}>
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
        ? <button onClick={() => {setChallengeStatus(1) 
          BubbleSort(cards, setCountTimes, true, setSortingSteps)
        }}>START</button>
        : <button onClick={goToNextStep}>NEXT</button>
        }
    </Grid>
    <Grid item xs={4}>
        <VerticalLinearStepper challengeInfo={challengeInfo} activeStep={activeStep}/>
      </Grid>
      </Grid>
      {/* <Grid item xs={4}> */}
      
       
      {/* </Grid> */}
      
   
  </>
  )
}

export default SortableListContainer;




