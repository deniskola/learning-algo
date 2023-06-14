import {useSelector} from "react-redux";
import List from "./List";
import {useState, useEffect} from "react";
import {RootState} from "../../../redux/store";
import {Items, SortingSteps} from "../../../types/checkpoint";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemsInput from "./ItemsInput";

const AlgoVisualization = () => {
  const [sortingFunction, setSortingFunction] = useState<Function | null>(null);
  const currentCheckpoint = useSelector(
    (state: RootState) => state.currentModule.currentCheckpoint
  );
  const [showItems, setShowItems] = useState<boolean>(false);
  const [sortingSteps, setSortingSteps] = useState<SortingSteps>([]);
  const [countTimes, setCountTimes] = useState<number>(0);
  const [items, setItems] = useState<Items>([]);

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
        <Typography variant="h5" display="block" sx={{m: 2}}>
          {currentCheckpoint.title}
        </Typography>
        <ItemsInput setItems={setItems} />
      </Stack>
      <List
        items={items}
        setCountTimes={setCountTimes}
        setSortingSteps={setSortingSteps}
        setShowItems={setShowItems}
        countTimes={countTimes}
        showItems={showItems}
      />
      <button
        onClick={() => {
          sortingFunction &&
            sortingFunction(items, setCountTimes, false, setSortingSteps);
          setShowItems(true);
        }}
      >
        Sort
      </button>
    </>
  );
};

export default AlgoVisualization;
