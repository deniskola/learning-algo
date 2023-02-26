import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import type { FC } from 'react'
import { useCallback, useState } from 'react'

import { Card } from './Card'

const style = {
  width: 400,
  transform: 'rotate(270deg)'
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

const CardList = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: '1',
    },
    {
      id: 2,
      text: '2',
    },
    {
      id: 3,
      text: '5',
    },
    {
      id: 4,
      text: '2',
    },
    {
      id: 5,
      text: '4',
    },
    {
      id: 6,
      text: '3',
    },
    {
      id: 7,
      text: '1',
    },
  ])

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

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    },
    [],
  )

return (

  <DndProvider backend={HTML5Backend}>
    <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
  </DndProvider>
  )
}

export default CardList;




