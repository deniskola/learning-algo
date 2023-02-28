import  CardList  from './../components/StepContent/CardList'
import { useParams } from 'react-router-dom';



const StepContent = () => {
    const params = useParams();
    return (
        // <div>
        //     StepContent page
        //     <hr />
        //     Module: {params.moduleid}
        //     <br />
        //     Step: {params.stepid}
            
        // </div>
        <CardList/>
    );
}

export default StepContent;