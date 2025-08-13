// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Uploaded Documents">
      <Typography variant="body2">
       <p>Aadhar Card Front: Not uploaded.</p> 
       <p>Aadhar Card Back: Not uploaded.</p> 
<p>GST Document: Not uploaded.</p> 
<p>Other Registration Documents: Not uploaded.</p> 
      </Typography>
    </MainCard>
  );
}
