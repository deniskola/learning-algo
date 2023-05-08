import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Challenge from "../components/Checkpoint/Challenge/Challenge";
import AlgoVisualization from "../components/Checkpoint/AlgoVisualization/AlgoVisualization";
import Lesson from "../components/Checkpoint/Lesson/Lesson";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCurrentContentType } from "../redux/slices/currentModuleSlice";
const Checkpoint = () => {
    const params = useParams();
    const currentContentType = useSelector((state: RootState) => state.currentModule.currentContentType);
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(setCurrentContentType(params))
    }, []);
    

    const CheckpointContent = () => {
        if(currentContentType === "lesson") return <Lesson />
        else if(currentContentType === "algo-visualization") return <AlgoVisualization/>
        else return <Challenge/> 
    }
    return <CheckpointContent/> 
}

export default Checkpoint;