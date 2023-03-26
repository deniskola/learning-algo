import { useState } from 'react'
import { ListItem } from './ListItem'
import { motion } from 'framer-motion'
import BubbleSort from '../../../helpers/BubbleSort'
import SelectionSort from '../../../helpers/SelectionSort'
import { Items, SortingSteps } from '../../../types/checkpoint'

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
  const [showItems, setShowItems] = useState<boolean>(false);
  const [sortingSteps, setSortingSteps] = useState<SortingSteps>([])
  const [countTimes, setCountTimes] = useState<number>(0)
  const [items, setItems] = useState<Items>([
    {
      id: 0,
      value: '1',
      x: [0, 0],
      opacity: [0.5]
    },
    {
      id: 1,
      value: '2',
      x: [0, 0],
      opacity: [0.5]
    },
    {
      id: 2,
      value: '5',
      x: [0, 0],
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
  const times: number[] = [];

  for (let i = 0; i < countTimes; i++) {
    const value = (i + 1) / countTimes;
    times.push(value);
  }

  return times;
}

return (
  <>  
    <button onClick={()=> (console.log(items))}>items</button>
    <button onClick={()=> (console.log(countTimes))}>countTimes</button>
    <button onClick={()=> (console.log(keyFrameTimes()))}>keyFrameTimes()</button>
    {showItems ? (
    <> 
      <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
      }}>
        {items.map((item) => (
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
        {items.map((item) => (
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