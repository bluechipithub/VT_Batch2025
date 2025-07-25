// import { Link as RouterLink } from 'react-router-dom';

// material-ui
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        pt: 3,
        mt: 'auto'
      }}
    >
      <Typography variant="caption" >
        &copy; All Rights Reserved By <span style={{ color: 'red' }}>BlueChipCares</span> admin{' '}
       
      </Typography>
    </Stack>
  );
}
