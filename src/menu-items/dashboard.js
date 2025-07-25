// assets
import { IconDashboard,IconUserCircle } from '@tabler/icons-react';

// constant
const icons = { IconDashboard,IconUserCircle };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
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
