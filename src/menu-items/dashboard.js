// assets
// eslint-disable-next-line prettier/prettier
import { IconUserCircle} from '@tabler/icons-react';

// constant
// eslint-disable-next-line prettier/prettier
const icons = {IconUserCircle};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/provider/dashboard',
      icon: icons.IconUserCircle,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
