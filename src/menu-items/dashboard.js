// assets
import { IconDashboard,IconUserExclamation,IconUserPause } from '@tabler/icons-react';

// constant
const icons = {IconUserExclamation,IconUserPause };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: '',
  title: '',
  type: 'group',
  children: [
    {
      id: 'DASHBOARD-1',
      title: 'DASHBOARD-1',
      type: 'item',
      url: 'Admin/dashboard1',
      icon: icons.IconUserExclamation,
      breadcrumbs: false
    },
     {
      id: 'DASHBOARD-2',
      title: 'DASHBOARD-2',
      type: 'item',
      url: 'Admin/dashboard2/',
      icon: icons.IconUserPause,
      breadcrumbs: false
    },
    
  ]
};

export default dashboard;
