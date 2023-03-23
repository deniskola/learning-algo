const objectsEqual = (o1: {[key: string]: any}, o2: {[key: string]: any}): boolean =>
    Object.keys(o1).length === Object.keys(o2).length 
        && Object.keys(o1).every(p => o1[p] === o2[p]);

const arraysEqual = (a1: {[key: string]: any}[], a2: {[key: string]: any}[]): boolean => 
    a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));


export default arraysEqual;