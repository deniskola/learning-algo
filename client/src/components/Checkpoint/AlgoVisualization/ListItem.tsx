import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { motion } from 'framer-motion'

export const ItemTypes = {
    CARD: 'card',
  }

const style = {
  border: '1px solid gray',
  padding: '0.5rem 1rem 0.5rem 1rem',
  margin: '.2rem ',
  backgroundColor: 'white',
  cursor: 'move',
}

export interface ListItemProps {
  value: string
}

interface DragItem {
  index: number
  id: string
  type: string
}

export const ListItem: FC<any> = ({ value }) => {
 

  return (
    <div 
        // animate = {{x:100}}
        style={{ ...style, height: `${parseInt(value)*50}px`, backgroundColor: "#041014", color: "whitesmoke" }}
    >
       {value}
    </div>
  )
}
