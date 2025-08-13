import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// routing
import { Link } from 'react-router-dom';

// project components
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// icons
import { IconMenu2, IconPhotoDown, IconDownload } from '@tabler/icons-react';

export default function Header() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* Logo + Drawer */}
      <Box sx={{ width: downMD ? 'auto' : 228, display: 'flex' }}>
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            overflow: 'hidden',
            transition: 'all .2s ease-in-out',
            bgcolor: 'secondary.light',
            color: 'secondary.dark',
            '&:hover': {
              bgcolor: 'secondary.dark',
              color: 'secondary.light'
            }
          }}
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="20px" />
        </Avatar>
      </Box>

      {/* Notification */}
      <NotificationSection />

      {/* Greeting */}
      <Box sx={{ flexGrow: 1 }} />
      {/* <h2 style={{ color: 'grey', marginLeft: '10px' }}>Hello Service Provider!</h2> */}

      {/* Download Dropdown */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        {/* <IconButton
          onClick={handleClick}
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            bgcolor: 'primary.light',
            color: 'primary.dark',
            '&:hover': {
              bgcolor: 'primary.dark',
              color: 'primary.light'
            }
          }}
        >
          <IconDownload stroke={1.5} size="20px" />
        </IconButton> */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={Link} to="/provider/id-card" onClick={handleClose}>
            <IconPhotoDown size={18} style={{ marginRight: 8, color: 'red' }} />
            View ID
          </MenuItem>
        </Menu>
      </Box>

      {/* Profile Section */}
      <ProfileSection />
    </>
  );
}