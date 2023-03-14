export interface Swap {
    index1: number;
    index2: number | null;
}

const BubbleSort = (sortedArray:any, setOrder:any, order:any,  setShowItems:any) => {
    const arr = [...sortedArray];
    let tempOrder: Swap[] = [];
    let swapped;
  
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            arr.map((t)=> ((t.id !== arr[i].id && t.id !== arr[i+1].id ) && t.opacity.push(0.5)));
            arr[i].opacity.push(1);
            arr[i+1].opacity.push(1);
            if (arr[i].value > arr[i + 1].value) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                
                //animation
                tempOrder.push({ index1: arr[i].id , index2: arr[i+1].id });
                arr[i+1].x.push(arr[i+1].x.length > 0 ? (arr[i+1].x.at(-1)+49) : 49);
                arr.map((t)=> ((t.id !== arr[i].id && t.id !== arr[i+1].id ) && t.x.push(t.x.at(-1))));
                arr[i].x.push(arr[i].x.length > 0 ? (arr[i].x.at(-1)-49) : (-49));
            }else {
            
                tempOrder.push({ index1: arr[i].id , index2: null });
                arr.map((t)=> (t.x.push(t.x.at(-1))));
            }
        
        } 
        setOrder([...order, ...tempOrder]); 
    } while(swapped)
   
    setShowItems(true);
  }

  export default BubbleSort;