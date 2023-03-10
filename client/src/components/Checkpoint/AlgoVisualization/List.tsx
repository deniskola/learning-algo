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
  const [cards, setCards] = useState<any[]>([
    {
      id: 0,
      value: '1',
      x: [],
      times: [0]
    },
    {
      id: 1,
      value: '2',
      x: [],
      times: []
    },
    {
      id: 2,
      value: '5',
      x: [],
      times: []
    },
    {
      id: 3,
      value: '2',
      x: [],
      times: []
    },
    {
      id: 4,
      value: '4',
      x: [],
      times: []
    },
    {
      id: 5,
      value: '3',
      x: [],
      times: []
    },
    {
      id: 6,
      value: '1',
      x: [],
      times: []
    },
  ])
  const [order, setOrder] = useState<Swap[]>([]);
  const [itemsAnim, setItemsAnim] = useState<any>(cards);
//   const [order, setOrder] = useState(cards.map((card) => card.id))

//   useEffect(() => {
//     setOrder(cards.map((card) => card.id))
//   }, [cards])

//   useEffect(() => {
//     console.log(cards.filter((card) => order.includes(card.id)))
//   }, [order])

return (
    <>
    {showItems ? (<> 
    <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
        }}>
        { itemsAnim.map((card:any) => (
          <motion.div
            animate={{
              x: card.x,
            }}
          >
            <ListItem key={card.id} value={card.value} />
          </motion.div>
         ))}
    </div>
     </>): (<>
      <div 
        style={{width: 400,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end'
        }}>
        { itemsAnim.map((card:any) => (
          <div>
              <ListItem key={card.id} value={card.value}/>
          </div>
          ))}
     </div>
    </>)} 
    <button onClick={()=> BubbleSort(cards, itemsAnim, setOrder, order, setItemsAnim, setShowItems)}>Animate</button>
    </>
  )
}

export default List;




