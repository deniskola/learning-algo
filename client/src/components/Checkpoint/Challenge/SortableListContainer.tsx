import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { FC, useEffect } from 'react'
import { useCallback, useState } from 'react'

import { Card } from './SortableItem'
import { Grid } from '@mui/material'
import BubbleSort from '../../../helpers/BubbleSort'
import arraysEqual from '../../../utils/compareArraysOfObjects'

const style = {
  width: 400,
  display: 'flex',
  flexDirection: 'row'
}

export interface Item {
  id: number
  value: string
}

export interface ContainerState {
  cards: Item[]
}

const SortableListContainer = () => {
  const [cards, setCards] = useState([
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
  const [userSortingSteps, setUserSortingSteps]= useState<any>([]);
  const [order, setOrder] = useState(cards.map((card) => card.id));
  const [challengeStatus, setChallengeStatus] = useState<number>(0);
  const [stepCount, setStepCount] = useState<any>(0);
  const [challengeInfo, setChallengeInfo] = useState<any>([]);
  const [sortingSteps, setSortingSteps] = useState<any>();
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
    userSortingSteps.push(cards)
    setUserSortingSteps(userSortingSteps);
    setStepCount(stepCount + 1)
    
    var tempChallengeInfo = [...challengeInfo];
    
    if(arraysEqual(sortingSteps[stepCount].array, userSortingSteps[stepCount])){
        tempChallengeInfo.push("correct");
        setChallengeInfo([...tempChallengeInfo])
    }else {
      tempChallengeInfo.push("error");
        setChallengeInfo([...tempChallengeInfo])
    }
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
    
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {challengeStatus === 0 
        ? <button onClick={() => {setChallengeStatus(1) 
          BubbleSort(cards,  true, setSortingSteps)
        }}>START</button>
        : <button onClick={goToNextStep}>NEXT</button>
        }
       
      </Grid>
      <Grid item xs={4}>
        {challengeInfo.map((cI:any)=> <div>{cI}</div>)}
      </Grid>
    </Grid>
  </>
  )
}

export default SortableListContainer;




