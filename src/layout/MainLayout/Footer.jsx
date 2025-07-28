import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
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
        mt: 'auto',
        backgroundColor:'white',
        padding:'12px',
        width:'100%'
      }}
    >
      <Typography variant="caption">
         All Rights Reserved by <span style={{color:"red"}}>BlueChipCares</span> admin.{' '}
        {/* <Typography component={Link} href="https://codedthemes.com/about-us/" underline="hover" target="_blank" color="secondary.main">
          CodedThemes
        </Typography> */}
      </Typography>
      {/* <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          component={RouterLink}
          to="https://x.com/codedthemes"
          underline="hover"
          target="_blank"
          variant="caption"
          color="text.primary"
        >
          Twitter
        </Link>
        <Link
          component={RouterLink}
          to="https://discord.com/invite/p2E2WhCb6s"
          underline="hover"
          target="_blank"
          variant="caption"
          color="text.primary"
        >
          Discord
        </Link>
      </Stack> */}
    </Stack>
  );
}
