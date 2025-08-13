// assets
import { IconUserCircle } from '@tabler/icons-react';

// constant
const icons = { IconUserCircle };

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
      url: '/customer/customer_dashboard',
      icon: icons.IconUserCircle,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
