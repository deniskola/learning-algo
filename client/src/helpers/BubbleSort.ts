export interface Swap {
    index1: number;
    index2: number;
}

const BubbleSort = (sortedArray:any, itemsAnim:any, setOrder:any, order:any, setItemsAnim:any, setShowItems:any) => {
    const arr = [...sortedArray];
    const tempArr = [...arr];
    let tempOrder: Swap[] = [];
    let tempItemsAnim: any = [...itemsAnim];
    const len = arr.length;
    let swapped;
    let countJ = 0;
  
    for (let j = 0; j < arr.length; j++) {
      if(j == 0) countJ++;
      if(countJ > 1) return;
      for (let i = 0; i < arr.length - j - 1; i++) {
        if (arr[i].value > arr[i + 1].value) {
          
          
          tempOrder.push({ index1: arr[i].id , index2: arr[i+1].id });
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
          
              tempArr[arr[i+1].id].x.push(tempArr[arr[i+1].id].x.length > 0 ? (tempArr[arr[i+1].id].x.at(-1)+49) : 49);
              tempArr[arr[i].id].x.push(tempArr[arr[i].id].x.length > 0 ? (tempArr[arr[i].id].x.at(-1)-49) : (-49));
            
         
        }
      }
      setOrder([...order, ...tempOrder]);
      
    }
    
    
  setItemsAnim(tempArr);
  setShowItems(true);
  
  }

  export default BubbleSort;