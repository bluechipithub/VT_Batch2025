// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Appliedjobs() {
  return (
    <MainCard title="Applied Jobs">
      <Typography variant="body2">
        This is a sample page demonstrating the use of MainCard component.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        You can customize this page as per your requirements.
      </Typography>
    </MainCard>
  );
}
