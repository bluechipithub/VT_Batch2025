


import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI Components
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme
} from '@mui/material';

// Custom Components
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import useConfig from 'hooks/useConfig';

// Assets
import User1 from 'assets/images/users/profile.jpeg';
import { IconLogout, IconUser } from '@tabler/icons-react';

export default function ProfileSection() {
  const theme = useTheme();
  const { borderRadius } = useConfig();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          ml: 2,
          height: '48px',
          borderRadius: '27px',
          '& .MuiChip-label': { lineHeight: 0 }
        }}
        icon={
          <Avatar
            src={User1}
            alt="user"
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
          />
        }
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-end"
        modifiers={[{ name: 'offset', options: { offset: [0, 14] } }]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  {/* Header */}
                  <Box sx={{ p: 2, pb: 0 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <img
                        src={User1}
                        alt="Profile"
                        style={{
                          width: '35px',
                          height: '60px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                      <Stack spacing={0.5}>
                        <Typography variant="h4">Aryan Kumar</Typography>
                        <Typography variant="subtitle2">Service Provider (523)</Typography>
                        <Typography variant="subtitle2">aryankumar7898084585@gmail.com</Typography>
                      </Stack>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* Menu List */}
                  <Box sx={{ p: 2, py: 0 }}>
                    <List
                      component="nav"
                      sx={{
                        width: '100%',
                        maxWidth: 350,
                        minWidth: 300,
                        borderRadius: `${borderRadius}px`,
                        '& .MuiListItemButton-root': { mt: 0.5 }
                      }}
                    >
                      {/* Profile Link */}
                      <ListItemButton
                        component={RouterLink}
                        to="/provider/User-Profile"
                        onClick={handleClose}
                        sx={{ borderRadius: `${borderRadius}px` }}
                      >
                        <ListItemIcon>
                          <IconUser stroke={1.5} size="20px" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Profile</Typography>} />
                      </ListItemButton>

                      {/* Logout */}
                      <ListItemButton
                       component={RouterLink}
                        to="/home"
                        onClick={handleClose}
                      sx={{ borderRadius: `${borderRadius}px` }}>
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="20px" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                      </ListItemButton>
                    </List>
                  </Box>
                </MainCard>
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}
