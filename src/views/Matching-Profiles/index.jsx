import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard content={false}>
      {/* Green banner at the top */}
      <Box
        sx={{
          backgroundColor: 'green',
          borderRadius: '6px',
          minHeight: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#fff',
            fontWeight: 700,
            textAlign: 'center',
            fontSize:'18px',
            fontFamily:'sans-serif',
            py: 1
          }}
        >
          Matching Profiles ( 0 records found )
        </Typography>
      </Box>
      {/* Empty results area */}
      <Box sx={{ minHeight: 42, background: 'transparent' }}>
        {/* Add results mapping here if data present */}
      </Box>
    </MainCard>
  );
}
