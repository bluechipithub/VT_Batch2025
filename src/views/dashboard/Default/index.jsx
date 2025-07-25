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
// // App.jsx
// material-ui
// material-ui
// import Typography from '@mui/material/Typography';
// import { IconBackground } from '@tabler/icons-react';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //

// export default function Dashboard() {
//   boxstyle={
//     width:'300px',
//     height:'200px',
//     BackgroundColor:'beige',
//     display:'300px',

//   };
//   return (
//     <MainCard title="">
//       <Typography variant="body2">
//         <div style={{padding:'20px'}}>
//         <div style={boxStyle}> Service Request </div>
//          <div style={boxStyle}>Matching Profiles </div>
//          </div>

//       </Typography>
//     </MainCard>
//   );
// }
// import { ShieldCheck, Folder } from "lucide-react"; // lucide-react for icons
// material-ui
// 
// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Dashboard() {
  return (
    <MainCard title="">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
    </MainCard>
  );
}
