

const SelectionSort = (items:any, setOrder:any,  order:any, setShowItems:any, setItems:any) => {
    const arr = [...items]
    let tempOrder: any[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        //animation
        tempOrder.push({ index1: null , index2: null });
        arr.map((t)=> (t.x.push(t.x.at(-1))))

        if (arr[j].value < arr[minIndex].value) {
          minIndex = j;   
        }
      }
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;

      //animation
      tempOrder.push({ index1: arr[i] , index2: arr[minIndex] });
      arr.map((t)=> (t.id !== arr[i].id && t.id !== arr[minIndex].id) && t.x.push(t.x.at(-1)))
      arr[i].x.push(arr[i].x.at(-1)+(i-minIndex)*49)
      arr[minIndex].x.push(arr[minIndex].x.at(-1)-(i-minIndex)*49)
    
    }
    setOrder([...order, ...tempOrder]); 
    // setItems(arr)
    setShowItems(true)
  }
  

export default SelectionSort;