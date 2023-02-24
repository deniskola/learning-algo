import { useParams } from 'react-router-dom';



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