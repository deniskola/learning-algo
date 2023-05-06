import { useState } from "react"
import { useParams } from "react-router-dom";
import Challenge from "../components/Checkpoint/Challenge/Challenge";
import data from "../mockData/mockData.json"
import AlgoVisualization from "../components/Checkpoint/AlgoVisualization/AlgoVisualization";
import Lesson from "../components/Checkpoint/Lesson/Lesson";
const Checkpoint = () => {
    const params = useParams();
    const [contentType, setContentType] = useState<string>();

    const CheckpointContent = () => {
        const moduleSteps = data.challengeKinds[0].modules?.find(module => params.moduleid && module.id === parseInt(params.moduleid))?.steps;

        // Get the step with the given step id
        const step = moduleSteps?.find(step => params.checkpointid && step.id === parseInt(params.checkpointid));

        // Get the content type of the step
        const contentType = step?.contentType;

        if(contentType === "lesson") return <Lesson />
        else if(contentType === "algo-visualization") return <AlgoVisualization/>
        else return <Challenge/> 
    }
    return <CheckpointContent/> 
}

export default Checkpoint;