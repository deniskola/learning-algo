import Module from "./Module"


const ModuleContainer = ({data}:any) => {

    return (
        <div>
            {data.challengeKinds[0].modules.map((x:any) => 
                <Module mod={x}/> 
            )}
        </div>
    )
}

export default ModuleContainer;