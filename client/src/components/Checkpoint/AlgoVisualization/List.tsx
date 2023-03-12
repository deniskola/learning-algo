import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { FC, useEffect } from 'react'
import { useCallback, useState } from 'react'
import { ListItem } from './ListItem'
import { motion, useAnimation } from 'framer-motion'
// import BubbleSort from '../../../utils/BubbleSort'
 import BubbleSort from '../../../helpers/BubbleSort'

const style = {
   width: 400,
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'end'
}

export interface Item {
  id: number
  value: string
}

export interface ContainerState {
  cards: Item[]
}

interface Swap {
    index1: number;
    index2: number;
}

const List = () => {
  const [showItems, setShowItems] = useState(false);
  const [cards, setCards] = useState<any>([
    {
      id: 0,
      value: '1',
      x: [0]
    },
    {
      id: 1,
      value: '2',
      x: [0]
    },
    {
      id: 2,
      value: '5',
      x: [0],
    },
    {
      id: 3,
      value: '2',
      x: [0],
    },
    {
      id: 4,
      value: '4',
      x: [0]
    },
    {
      id: 5,
      value: '3',
      x: [0],
    },
    {
      id: 6,
      value: '1',
      x: [0]
    },
  ])
  const [order, setOrder] = useState<Swap[]>([]);
//   const [order, setOrder] = useState(cards.map((card) => card.id))

//   useEffect(() => {
//     setOrder(cards.map((card) => card.id))
//   }, [cards])

//   useEffect(() => {
//     console.log(cards.filter((card) => order.includes(card.id)))
//   }, [order])

function keyFrameTimes() {
  let times:any = []
  order.map((x:any,i:any)=>{
    times.push(i/(order.length-1))
  })
  return times
}

return (
  <>  
    <button onClick={()=> (console.log(cards))}>items</button>
    <button onClick={()=> (console.log(order))}>order</button>
    {showItems ? (
    <> 
      <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
      }}>
        {cards.map((card:any) => (
          <motion.div
            animate={{
              x: card.x,      
            }}
            transition= {{
              times: keyFrameTimes(),
              duration: 20,
            }}
          >
            <ListItem key={card.id} value={card.value} />
          </motion.div>
         ))}
      </div>
    </>) : (
    <>
      <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
      }}>
        {cards.map((card:any) => (
          <div>
            <ListItem key={card.id} value={card.value}/>
          </div>
        ))}
      </div>
    </>)} 
    <button onClick={()=> BubbleSort(cards, setOrder, order, setShowItems)}>Bubble Sort</button>
  </>
  )
}

export default List;




