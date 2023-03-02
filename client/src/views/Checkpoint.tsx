import  SortableListContainer  from '../components/Checkpoint/SortableList/SortableListContainer'
import { useParams } from 'react-router-dom';



const Checkpoint = () => {
    const params = useParams();
    return (
        // <div>
        //     StepContent page
        //     <hr />
        //     Module: {params.moduleid}
        //     <br />
        //     Step: {params.stepid}
            
        // </div>
        <SortableListContainer/>
    );
}

export default Checkpoint;