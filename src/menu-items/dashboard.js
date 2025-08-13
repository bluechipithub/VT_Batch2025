// assets
import { IconUserCircle } from '@tabler/icons-react';

// constant
const icons = {  IconUserCircle };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: '',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/provider/dashboard',
      icon: icons. IconUserCircle,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
