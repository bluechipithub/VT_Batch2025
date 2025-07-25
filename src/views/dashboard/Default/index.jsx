/* eslint-disable prettier/prettier */
// import { useEffect, useState } from 'react';

// // material-ui
// import Grid from '@mui/material/Grid';

// // project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
// import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';

// import { gridSpacing } from 'store/constant';

// // assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// // ==============================|| DEFAULT DASHBOARD ||============================== //

// export default function Dashboard() {
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   return (
//     <Grid container spacing={gridSpacing}>
//       <Grid size={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
//             <EarningCard isLoading={isLoading} />
//           </Grid>
//           <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
//             <TotalOrderLineChartCard isLoading={isLoading} />
//           </Grid>
//           <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
//             <Grid container spacing={gridSpacing}>
//               <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
//                 <TotalIncomeDarkCard isLoading={isLoading} />
//               </Grid>
//               <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
//                 <TotalIncomeLightCard
//                   {...{
//                     isLoading: isLoading,
//                     total: 203,
//                     label: 'Total Income',
//                     icon: <StorefrontTwoToneIcon fontSize="inherit" />
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid size={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid size={{ xs: 12, md: 8 }}>
//             <TotalGrowthBarChart isLoading={isLoading} />
//           </Grid>
//           <Grid size={{ xs: 12, md: 4 }}>
//             <PopularCard isLoading={isLoading} />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
// material-ui
// import { Card } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import {IconUserSquareRounded} from '@tabler/icons-react';
// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //
// const icons = { IconUserSquareRounded };
// export default function Dashboard() {
//   return (
//     <MainCard title="Dashboard">
  
//       <Card sx={{ p: 2, bgcolor: 'secondary.light' }}>
//         <Typography variant="h4" sx={{ color: 'secondary.dark' }}>
//           Accept Your Service
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//           <icons.IconUserSquareRounded size={32} color="secondary" />
//         </Box>
      
//       </Card>


//     </MainCard>
//   );
// }
// import { Card, Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import { IconUserSquareRounded } from '@tabler/icons-react';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //
// const icons = { IconUserSquareRounded };

// export default function Dashboard() {
//   return (
//     <MainCard title="Dashboard">
//       <Card direction="row"  sx={{ p: 2, bgcolor: 'secondary.light' }}>
//         <Typography variant="h4" spacing={2} alignItems="center" sx={{ color: 'secondary.dark' }}>
//           Accept Your Service
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//           <icons.IconUserSquareRounded size={32} color="currentColor" />
//         </Box>
//         <Typography variant="body2" spacing={0.5} sx={{ fontSize: 35, mt: 2 }}>
//           0
//         </Typography>
//       </Card>
//     </MainCard>
//   );
// }


import React from 'react';
import { Card, Stack, Typography, useTheme, Box } from '@mui/material';
import {
  IconUserSquareRounded,
  IconFolder,
  IconInbox,
  IconFile
} from '@tabler/icons-react';

import MainCard from 'ui-component/cards/MainCard';

function StatCard({ title, value, icon: Icon, color }) {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
        {title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Icon size={32} stroke={2} style={{ color }} />
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>
          {value}
        </Typography>
      </Stack>
    </Card>
  );
}

export default function Dashboard() {
  const stats = [
    { title: 'Accepted your Service', value: 0, icon: IconUserSquareRounded, color: '#3b82f6' },
    { title: 'Matching Requests', value: 1, icon: IconFolder, color: '#8b5cf6' },
    { title: 'Received', value: 0, icon: IconInbox, color: '#ef4444' },
    { title: 'Receivables', value: 0, icon: IconFile, color: '#10b981' }
  ];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', p: 3 }}>
      <MainCard sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            mt: 2
          }}
        >
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </Box>
      </MainCard>
    </Box>
  );
}


