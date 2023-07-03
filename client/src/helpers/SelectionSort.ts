

const SelectionSort = (items:any, setCountTimes:any, challengeMode:boolean, setSortingSteps:any) => {
    const arr = [...items]
    let tempSortingSteps = [];
    let countTimes = 0;
    const distance = 49.5;

    for (let i = 0; i < arr.length - 1; i++) {
      if(!challengeMode){
        countTimes++;
        arr.map((t)=> ((t.id !== arr[i].id) && t.opacity.push(0.5)))
        arr[i].opacity.push(1)
      }
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        //animation
        countTimes++;
        tempSortingSteps.push({
          array: arr.map(({id, value}) => ({id , value})),
          swap: null
        })
        if(!challengeMode){
          arr.map((t)=> (t.x.push(t.x.at(-1))))
          arr.map((t)=> ((t.id !== arr[j].id ) && t.opacity.push(0.5)))
          arr[j].opacity.push(1)
          
          if (arr[j].value < arr[minIndex].value) {
            minIndex = j;   
          }
        }  
      }
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;

      //animation
      countTimes++;
      tempSortingSteps.push({
        array: arr.map(({id, value}) => ({id , value})),
        swap: {item1: arr[i].id, item2: arr[minIndex].id}
      })
      if(!challengeMode){
        arr.map((t)=> (t.id !== arr[i].id && t.id !== arr[minIndex].id) && t.x.push(t.x.at(-1)))
        arr[i].x.push(arr[i].x.at(-1)+(i-minIndex)* distance)
        arr[minIndex].x.push(arr[minIndex].x.at(-1)-(i-minIndex)* distance)
        arr.map((t)=> ((t.id !== arr[minIndex].id) && t.opacity.push(0.5)))
        arr[minIndex].opacity.push(1)
      }
    }
    setSortingSteps([...tempSortingSteps])
    // setItems(arr)
    setCountTimes(countTimes);
  }
  

export default SelectionSort;