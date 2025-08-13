// assets
import { IconDashboard,IconUser ,IconUsers} from '@tabler/icons-react';

// constant
const icons = { IconDashboard ,IconUser,IconUsers};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  // id: 'dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'Dashboard1',
      title: 'DASHBOARD-1',
      type: 'item',
      url: 'admin/dashboard1',
      icon: icons.IconUser,
      breadcrumbs: false
    },{
          id: 'Dashboard2',
          title: 'DASHBOARD-2',
          type: 'item',
          url: 'admin/Dashboard2',
          icon: icons.IconUsers,
          breadcrumbs: false
        },



  ]
};

export default dashboard;
