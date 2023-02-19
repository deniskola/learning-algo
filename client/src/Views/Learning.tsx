import { Grid } from "@mui/material";
import data from "../MockData/mockData.json"
import ModuleContainer from "../Components/Learning/ModuleContainer";

const Learning = () =>{
    return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <ModuleContainer data={data}/>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    )
}

export default Learning;