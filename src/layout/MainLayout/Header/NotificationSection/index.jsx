import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  CardActions,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

import { IconBell } from '@tabler/icons-react';

import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import NotificationList from './NotificationList';

// ==============================|| NOTIFICATION SECTION ||============================== //

export default function NotificationSection() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box sx={{ ml: 2 }}>
        <Avatar
          ref={anchorRef}
          variant="rounded"
          onClick={handleToggle}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            bgcolor: 'secondary.light',
            color: 'secondary.dark',
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
              bgcolor: 'secondary.dark',
              color: 'secondary.light'
            }
          }}
        >
          <IconBell size="20px" stroke={1.5} />
        </Avatar>
      </Box>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={downMD ? 'bottom' : 'bottom-end'}
        transition
        disablePortal
        modifiers={[{ name: 'offset', options: { offset: [downMD ? 5 : 0, 20] } }]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions position={downMD ? 'top' : 'top-right'} in={open} {...TransitionProps}>
              <Paper elevation={16}>
                <MainCard border={false} content={false} boxShadow shadow={theme.shadows[16]}>
                  {/* Header */}
                  <Box sx={{ backgroundColor: '#ff3c3c', px: 2, py: 1.5 }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Typography variant="h5" sx={{ color: '#fff' }}>
                        Notifications
                      </Typography>
                      <Typography
                        component={Link}
                        to="#"
                        variant="body2"
                        sx={{ color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}
                      >
                        Mark all as read
                      </Typography>
                    </Grid>
                  </Box>

                  {/* Notification Content */}
                  <Box
                    sx={{
                      maxHeight: 'calc(100vh - 220px)',
                      overflowY: 'auto',
                      '&::-webkit-scrollbar': { width: 7 },
                      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ccc', borderRadius: 3 }
                    }}
                  >
                    <NotificationList />
                  </Box>

                  {/* Footer */}
                  <CardActions sx={{ p: 1.25, justifyContent: 'center', backgroundColor: '#ff3c3c',Color: 'white' }}>
                    <Button size="small" variant="text" component={Link} to="#" style={{ color: '#fff' }}>
                      Check All Notifications
                    </Button>
                  </CardActions>
                </MainCard>
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}