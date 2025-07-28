import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import { red } from '@mui/material/colors';
import { IconShieldLock, IconFolder } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';

export default function DashboardDefault() {
  return (
    <MainCard title="">
      <Grid container spacing={2} backgroundcolor = '#rfsfgh' >
        {/* Service Request Box */}
        <Grid item xs={12} sm={6}>
          <Card sx={{borderRadius: 2, boxShadow: 3, width: 400 ,height: 150}}>
            <CardContent>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ fontSize: '24px', color: '#333' }}
              >
                Service Request
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2}}>
                <IconShieldLock size={50} color="#1976d2" />
                <Typography variant="h5" sx={{ fontSize: '50px', ml: 'auto' }}>
                  0
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Matching Profiles Box */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, width: 400,height: 150 }}>
            <CardContent>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ fontSize: '24px', color: '#333' }}
              >
                Matching Profiles
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <IconFolder size={50} color="#8e24aa" />
                <Typography variant="h5" sx={{ fontSize: '50px', ml: 'auto' }}>
                  0
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainCard>
  );
}
