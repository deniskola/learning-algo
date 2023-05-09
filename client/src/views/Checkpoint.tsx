import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Challenge from "../components/Checkpoint/Challenge/Challenge";
import AlgoVisualization from "../components/Checkpoint/AlgoVisualization/AlgoVisualization";
import Lesson from "../components/Checkpoint/Lesson/Lesson";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCurrentCheckpoint } from "../redux/slices/currentModuleSlice";
const Checkpoint = () => {
    const params = useParams();
    const currentCheckpoint = useSelector((state: RootState) => state.currentModule.currentCheckpoint);
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(setCurrentCheckpoint(params))
    }, []);
    

    const CheckpointContent = () => {
        if(currentCheckpoint.contentType === "lesson") return <Lesson />
        else if(currentCheckpoint.contentType === "algo-visualization") return <AlgoVisualization/>
        else return <Challenge/> 
    }
    return <CheckpointContent/> 
}

export default Checkpoint;