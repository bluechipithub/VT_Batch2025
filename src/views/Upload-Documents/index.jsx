// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Uploaded Documents">
      <Typography variant="body2">
       <p>Aadhar Card Front: Not choosen.</p> 
       <p>Aadhar Card Back: Not choosen .</p> 
<p>GST Document: Not choosen.</p> 
<p>Other Registration Documents: Not choosen.</p> 
      </Typography>
    </MainCard>
  );
}