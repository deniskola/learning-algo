import { useSelector } from "react-redux";
import List from "./List";
import {useState, useEffect} from "react"
import { RootState } from "../../../redux/store";
import { Items, SortingSteps } from "../../../types/checkpoint";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ItemsInput from "./ItemsInput";



const AlgoVisualization = () => {
    const [sortingFunction, setSortingFunction] = useState<Function | null>(null);
    const currentCheckpoint = useSelector((state: RootState) => state.currentModule.currentCheckpoint);
    const [showItems, setShowItems] = useState<boolean>(false);
    const [sortingSteps, setSortingSteps] = useState<SortingSteps>([])
    const [countTimes, setCountTimes] = useState<number>(0)
    const [items, setItems] = useState<Items>([]);
    // const [items, setItems] = useState<Items>([
        // {
        //     id: 0,
        //     value: '1',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 1,
        //     value: '2',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 2,
        //     value: '5',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 3,
        //     value: '2',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 4,
        //     value: '4',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 5,
        //     value: '3',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
        // {
        //     id: 6,
        //     value: '1',
        //     x: [0, 0],
        //     opacity: [0.5]
        // },
    // ])

    useEffect(() => {
        async function loadSortingFunction() {
          let algo: any;
          algo = await import(`../../../helpers/${currentCheckpoint.function}`);
          setSortingFunction(() => algo.default);
        }
        loadSortingFunction();
    }, [currentCheckpoint.function]);
    
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Typography variant="h5" display="block" sx={{ m: 2 }}>
                    {currentCheckpoint.title}
                </Typography>
                <ItemsInput setItems={setItems}/>
            </Stack>
            <List items={items} setCountTimes={setCountTimes} setSortingSteps={setSortingSteps} setShowItems={setShowItems} countTimes={countTimes} showItems={showItems}/>
            <button onClick={()=> {sortingFunction && sortingFunction(items, setCountTimes,  false, setSortingSteps); setShowItems(true) }}>Sort</button>
        </>
    );
}

export default AlgoVisualization;