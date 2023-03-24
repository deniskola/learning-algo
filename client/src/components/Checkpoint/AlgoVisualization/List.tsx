import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import { FC, useEffect } from 'react'
import { useCallback, useState } from 'react'
import { ListItem } from './ListItem'
import { motion, useAnimation } from 'framer-motion'
// import BubbleSort from '../../../utils/BubbleSort'
 import BubbleSort from '../../../helpers/BubbleSort'
import SelectionSort from '../../../helpers/SelectionSort'

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
  const [sortingSteps, setSortingSteps] = useState([])
  const [countTimes, setCountTimes] = useState<any>(0)
  const [items, setItems] = useState<any>([
    {
      id: 0,
      value: '1',
      x: [0, 0, 0],
      opacity: [0.5]
    },
    {
      id: 1,
      value: '2',
      x: [0, 0, 0],
      opacity: [0.5]
    },
    {
      id: 2,
      value: '5',
      x: [0, 0, 0],
      opacity: [0.5]
    },
    {
      id: 3,
      value: '2',
      x: [0, 0],
      opacity: [0.5]
    },
    {
      id: 4,
      value: '4',
      x: [0, 0],
      opacity: [0.5]
    },
    {
      id: 5,
      value: '3',
      x: [0, 0],
      opacity: [0.5]
    },
    {
      id: 6,
      value: '1',
      x: [0, 0],
      opacity: [0.5]
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
  for(let i:any; i < countTimes+1; i++){
    times.push(i/order.length-1)
  }
  return times
}

return (
  <>  
    <button onClick={()=> (console.log(items))}>items</button>
    <button onClick={()=> (console.log(order))}>order</button>
    <button onClick={()=> (console.log(keyFrameTimes()))}>keyFrameTimes()</button>
    {showItems ? (
    <> 
      <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
      }}>
        {items.map((item:any) => (
          <motion.div
            animate={{
              x: item.x,    
              opacity : item.opacity,
            }}
            transition= {{
              times: keyFrameTimes(),
              duration: 10,
            }}
          >
            <ListItem key={item.id} value={item.value}/>
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
        {items.map((item:any) => (
          <div style={{opacity: 0.5}}>
            <ListItem key={item.id} value={item.value} />
          </div>
        ))}
      </div>
    </>)} 
    <button onClick={()=> {BubbleSort(items, setCountTimes,  false, setSortingSteps); setShowItems(true) }}>Bubble Sort</button>
    <button onClick={()=> {SelectionSort(items, setOrder, order, setShowItems, setItems)}}>Selection Sort</button>
  </>
  )
}

export default List;