// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import Card  from '../dashboard/Default/Cards/Card';



// ==============================|| SAMPLE PAGE ||============================== //

export default function Dashboard1(){
  return (

 
    <MainCard   >
 
               <h1 style={{
                 textAlign:"center",
                 fontWeight:"lighter",
                 backgroundColor:"skyblue",
                 color:"#fff",
                 padding:"1rem",
                 borderRadius:".5rem"
               }}> DASHBOARD-1 </h1>
      <Typography variant="body2">  

     <Card /> 

      

      </Typography>
    </MainCard>

  );
}
