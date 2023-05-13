export interface Swap {
    index1: number;
    index2: number | null;
}

const BubbleSort = (sortedArray:any, setCountTimes:any,  challengeMode:any, setSortingSteps:any) => {
    const arr = [...sortedArray];
    let tempOrder: Swap[] = [];
    let tempSortingSteps = []
    let swapped;
    let countTimes = 0;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(!challengeMode) {
                arr.map((t)=> ((t.id !== arr[i].id && t.id !== arr[i+1].id ) && t.opacity.push(0.5)))
                arr[i].opacity.push(1)
                arr[i+1].opacity.push(1)
            }
            if (arr[i].value > arr[i + 1].value) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                
                //animation
                countTimes++;
                if(!challengeMode) {
                    arr[i+1].x.push(arr[i+1].x.length > 0 ? (arr[i+1].x.at(-1)+49) : 49)
                    arr.map((t)=> ((t.id !== arr[i].id && t.id !== arr[i+1].id ) && t.x.push(t.x.at(-1))))
                    arr[i].x.push(arr[i].x.length > 0 ? (arr[i].x.at(-1)-49) : (-49))
                }
                tempSortingSteps.push({
                    array: arr.map(({id, value}) => ({id , value})),
                    swap: {item1: arr[i].id, item2: arr[i+1].id}
                })
            }else {
            
                countTimes++;
                if(!challengeMode){
                    arr.map((t)=> (t.x.push(t.x.at(-1))));
                }
                tempSortingSteps.push({
                    array: arr.map(({id, value}) => ({id , value})),
                    swap: null
                })
            }
            
        } 
        // setOrder([...order, ...tempOrder]); 
        setSortingSteps([...tempSortingSteps])
    } while(swapped)
   
    // challengeMode(true);
    setCountTimes(countTimes);
  }

  export default BubbleSort;