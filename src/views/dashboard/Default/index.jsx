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
        // background: '#fff',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
        {title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <Icon size={40} stroke={2} style={{ color }} />
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
    <Box sx={{ width: '100%', Height: '130px', p: 0, m: 0 }}>
      <MainCard sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.3rem',
            mt: 2,
            mb: 2,
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