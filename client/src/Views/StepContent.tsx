import { useParams } from 'react-router-dom';
import data from '../MockData/mockData.json'



const StepContent = () => {
    const params = useParams();
    return (
        <div>
            StepContent page
            <hr />
            Module: {params.moduleid}
            <br />
            Step: {params.stepid}
            
        </div>
    );
}

export default StepContent;