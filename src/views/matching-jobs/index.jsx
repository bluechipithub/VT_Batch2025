// // material-ui
// import Typography from '@mui/material/Typography';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //

// export default function MatchingJobs() {
//   return (
//     <MainCard title="Matching Jobs">
//       <Typography variant="body2">
//         This is a sample page demonstrating the use of MainCard component.
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         You can customize this page as per your requirements.
//       </Typography>
//     </MainCard>
//   );
// }
import React from "react";
import { Box, Card, CardContent, Typography, Avatar, Link } from "@mui/material";

export default function MatchingJobs() {
  const jobs = [
    {
      title: "React JS Trainer",
      name: "SUNITA YADAV",
      department: "Information Technology (IT)",
      image: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    },
    // Add more jobs here if needed
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#29a3ef",
          py: 1.5,
          borderRadius: "4px 4px 0 0",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: 600 }}>
          Matching Jobs
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {jobs.map((job, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-4px)" },
              width: "40%",
            }}
          >
            <Avatar
              src={job.image}
              alt={job.name}
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Link
                href="#"
                underline="hover"
                sx={{ fontWeight: 600, color: "#1e40af", fontSize: "1rem" }}
              >
                {job.title}
              </Link>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {job.name}, ({job.department})
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

