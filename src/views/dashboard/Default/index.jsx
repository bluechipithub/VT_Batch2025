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
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Dashboard() {
  return (
    // <MainCard title="Dashboard">
    //   <Typography variant="h3" color="primary" align="center">
    //     Welcome to BlueChipCares Admin Dashboard
    //   </Typography>
    //   <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
    //     This is a sample dashboard page. You can customize it as per your requirements.
    //   </Typography>
    // </MainCard>

    <mainCard>
  <Typography component="div">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.2rem',
      marginTop: '1rem'
    }}>

      {/* Accepted your Service */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Roboto, sans-serif'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem' }}>Accepted your Service</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif'
        }}>
          <svg style={{ width: 50, height: 40, color: '#3b82f6' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 12a3 3 0 1 0 3 3" /><path d="M12 3l8 4v5a9 9 0 1 1 -16 0v-5z" />
          </svg>
          <div style={{ justifySelf: 'end', fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>0</div>
        </div>
      </div>

      {/* Matching Requests */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Roboto, sans-serif'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem' }}>Matching Requests</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif'
        }}>
          <svg style={{ width: 50, height: 50, color: '#8b5cf6' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7l4 0l2 3h11v11h-17z" />
          </svg>
          <div style={{ justifySelf: 'end', fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>1</div>
        </div>
      </div>

      {/* Received */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Roboto, sans-serif'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem' }}>Received</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif'
        }}>
          <svg style={{ width: 50, height: 50, color: '#ef4444' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v12H4z" /><path d="M4 13h5l2 3h2l2 -3h5" />
          </svg>
          <div style={{ justifySelf: 'end', fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>0</div>
        </div>
      </div>

      {/* Receivables */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        fontFamily: 'Roboto, sans-serif'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.5rem' }}>Receivables</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif'
        }}>
          <svg style={{ width: 20, height: 40, color: '#10b981' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>
          <div style={{ justifySelf: 'end', fontSize: '1.5rem', fontWeight: 800, color: '#333' }}>0</div>
        </div>
      </div>

    </div>
  </Typography>
</mainCard>

  
  );
}

