import { ListItem } from './ListItem'
import { motion } from 'framer-motion'

const List = ({items, countTimes, showItems}:any) => {
  
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
                duration: 20,
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

    </>
  )
}

export default List;