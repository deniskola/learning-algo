import React, { useState } from 'react';

interface BubbleSortProps {
  array: number[];
}


interface ArrayItem {
    id: number,
    value: number
}

interface Swap {
    index1: number;
    index2: number;
  }

const BubbleSort: React.FC = () => {
  const [sortedArray, setSortedArray] = useState<ArrayItem[]>([
    {id: 0, value: 2},
    {id: 1, value: 4},
    {id: 2, value: 5},
    {id: 3, value: 4},
    {id: 4, value: 2},
    {id: 5, value: 1},
  ]);
  const [order, setOrder] = useState<Swap[]>([]);

  const bubbleSort = () => {
    const arr = [...sortedArray];
    let tempOrder: Swap[] = [];
    const len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i].value > arr[i + 1].value) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
          tempOrder.push({ index1: arr[i].id, index2: arr[i+1].id })
        }
      }
      setOrder([...order, ...tempOrder]);
      
    } while (swapped);
    setSortedArray(arr);
  }

  return (
    <div>
      <button onClick={bubbleSort}>Sort</button>
      <ul>
        {sortedArray.map((x:any, index:any) => (
          <li key={index}>id:{x.id}, value:{x.value}</li>
        ))}
      </ul>
      <hr />
      {order.map((x, index) => (
          <li key={index}>{`Swapped ${x.index1} with ${x.index2}`}</li>
        ))}
    </div>
  );
}

export default BubbleSort;
