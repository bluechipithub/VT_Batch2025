// /* eslint-disable no-unused-vars */
// import { useEffect, useRef, useState } from 'react';

// // material-ui
// import { useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Chip from '@mui/material/Chip';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';
// import InputAdornment from '@mui/material/InputAdornment';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import Stack from '@mui/material/Stack';
// import Switch from '@mui/material/Switch';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// // project imports
// import UpgradePlanCard from './UpgradePlanCard';
// import MainCard from 'ui-component/cards/MainCard';
// import Transitions from 'ui-component/extended/Transitions';
// import useConfig from 'hooks/useConfig';

// // assets
// import User1 from 'assets/images/users/profile.jpeg';
// import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons-react';

// // ==============================|| PROFILE MENU ||============================== //

// export default function ProfileSection() {
//   const theme = useTheme();
//   const { borderRadius } = useConfig();
//   const [sdm, setSdm] = useState(true);
//   const [value, setValue] = useState('');
//   const [notification, setNotification] = useState(false);
//   const [selectedIndex] = useState(-1);
//   const [open, setOpen] = useState(false);

//   /**
//    * anchorRef is used on different components and specifying one type leads to other components throwing an error
//    * */
//   const anchorRef = useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   const prevOpen = useRef(open);
//   useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <>
//       <Chip
//         sx={{
//           ml: 2,
//           height: '48px',
//           borderRadius: '27px',
//           '& .MuiChip-label': {
//             lineHeight: 0
//           }
//         }}
//         icon={
//           <Avatar
//             src={User1}
//             alt="user-images"
//             sx={{
//               ...theme.typography.mediumAvatar,
//               margin: '8px 0 8px 8px !important',
//               cursor: 'pointer',
//             }}
//             ref={anchorRef}
//             aria-controls={open ? 'menu-list-grow' : undefined}
//             aria-haspopup="true"
//             color="inherit"
//           />
//         }
//         // label={<IconSettings stroke={1.5} size="24px" />}
//         ref={anchorRef}
//         aria-controls={open ? 'menu-list-grow' : undefined}
//         aria-haspopup="true"
//         onClick={handleToggle}
//         color="primary"
//         // aria-label="user-account"
//         // alignItems="right"
//       />
//       <Popper
//         placement="bottom"
//         open={open}
//         anchorEl={anchorRef.current}
//         role={undefined}
//         transition
//         disablePortal
//         modifiers={[
//           {
//             name: 'offset',
//             options: {
//               offset: [0, 14]
//             }
//           }
//         ]}
//       >
//         {({ TransitionProps }) => (
//           <ClickAwayListener onClickAway={handleClose}>
//             <Transitions in={open} {...TransitionProps}>
//               <Paper>
//                 {open && (
//                   <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
//                     <Box sx={{ p: 2, pb: 0 }}>
//     <Stack direction="row" spacing={2} alignItems="center">
//       {/* Image on the left */}
//       <img
//         src={User1}
//         alt="Profile Cover"
//         style={{
//           width: '35px',
//           height: '60px',
//           objectFit: 'cover',
//           borderRadius: '8px'
//         }}
//       />

//       {/* Text content on the right */}
//       <Stack spacing={0.5}>
//         <Typography variant="h4">Aryan Kumar</Typography>
//         <Typography variant="subtitle2">Service Provider (523)</Typography>
//         <Typography variant="subtitle2">aryankumar7898084585@gmail.com</Typography>
//       </Stack>
//     </Stack>
//   </Box>
//                     <Divider />
//                     <Box
//                       sx={{
//                         p: 2,
//                         py: 0,
//                         height: '100%',
//                         maxHeight: 'calc(100vh - 250px)',
//                         overflowX: 'hidden',
//                         '&::-webkit-scrollbar': { width: 5 }
//                       }}
//                     >
//                       {/* <UpgradePlanCard /> */}
//                       {/* <Divider /> */}
//                       {/* <Card sx={{ bgcolor: 'primary.light', my: 2 }}>
//                         <CardContent>
//                           <Grid container spacing={3} direction="column">
//                             <Grid>
//                               <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <Grid>
//                                   <Typography variant="subtitle1">Start DND Mode</Typography>
//                                 </Grid>
//                                 <Grid>
//                                   <Switch
//                                     color="primary"
//                                     checked={sdm}
//                                     onChange={(e) => setSdm(e.target.checked)}
//                                     name="sdm"
//                                     size="small"
//                                   />
//                                 </Grid>
//                               </Grid>
//                             </Grid>
//                             <Grid>
//                               <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <Grid>
//                                   <Typography variant="subtitle1">Allow Notifications</Typography>
//                                 </Grid>
//                                 <Grid>
//                                   <Switch
//                                     checked={notification}
//                                     onChange={(e) => setNotification(e.target.checked)}
//                                     name="sdm"
//                                     size="small"
//                                   />
//                                 </Grid>
//                               </Grid>
//                             </Grid>
//                           </Grid>
//                         </CardContent>
//                       </Card> */}
//                       {/* <Divider /> */}
//                       <List
//                         component="nav"
//                         sx={{
//                           width: '100%',
//                           maxWidth: 350,
//                           minWidth: 300,
//                           borderRadius: `${borderRadius}px`,
//                           '& .MuiListItemButton-root': { mt: 0.5 }
//                         }}
//                       >
//                         {/* <ListItemButton sx={{ borderRadius: `${borderRadius}px` }} selected={selectedIndex === 0}>
//                           <ListItemIcon>
//                             <IconSettings stroke={1.5} size="20px" />
//                           </ListItemIcon>
//                           <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
//                         </ListItemButton> */}
//                         <ListItemButton sx={{ borderRadius: `${borderRadius}px` }} selected={selectedIndex === 1}>
//                           <ListItemIcon>
//                             <IconUser stroke={1.5} size="20px" />
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={
//                               <Grid container spacing={1} sx={{ justifyContent: 'space-between' }}>
//                                 {/* <Grid>
//                                   <Typography variant="body2">Profile</Typography>
//                                 </Grid> */}

//                                 <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//                                           <MenuItem component={Link} to="/provider/User-Profile" onClick={handleClose}>
//                                             <IconPhotoDown size={18} style={{ marginRight: 8, color: 'red' }} />
//                                             Profile
//                                           </MenuItem>
//                                         </Menu>
                               
//                               </Grid>
//                             }
//                           />
//                         </ListItemButton>
//                         <ListItemButton sx={{ borderRadius: `${borderRadius}px` }} selected={selectedIndex === 4}>
//                           <ListItemIcon>
//                             <IconLogout stroke={1.5} size="20px" />
//                           </ListItemIcon>
//                           <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
//                         </ListItemButton>
//                       </List>
//                     </Box>
//                   </MainCard>
//                 )}
//               </Paper>
//             </Transitions>
//           </ClickAwayListener>
//         )}
//       </Popper>
//     </>
//   );
// }


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
                      <ListItemButton sx={{ borderRadius: `${borderRadius}px` }}>
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
