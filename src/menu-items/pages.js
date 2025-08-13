// assets
import { Breadcrumbs } from '@mui/material';
import { IconClockCheck, IconBrandGoogleDrive, IconBrandCtemplar,IconBrandSharik
} from '@tabler/icons-react';

// constant
const icons = {
  IconClockCheck, IconBrandGoogleDrive, IconBrandCtemplar,IconBrandSharik

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: '',
  title: '',

  
  // icon: icons.Iconhelp,
  type: 'group',
  children: [
    {
      id: 'Your ADs & Response',
      title: 'Your ADs & Response',
      type: 'collapse',
      icon: icons.IconClockCheck,
      breadcrumbs: false,
      children: [
        {
          id: 'Post Free ADs (Service Requirement)',
          title: 'Post Free ADs (Service Requirement)',
          type: 'item',
          icon: icons.IconBrandGoogleDrive,
          breadcrumbs: false,
          url: '/customer/Customers-Post',
          
        },
        {
          id: 'ADs Response',
          title: 'ADs Response',
          type: 'item',
          icon: icons.IconBrandCtemplar,
          breadcrumbs: false,
          url: '/customer/application',
          

        },
        {
          id: 'All Posted ADs',
          title: 'All Posted ADs',
          type: 'item',
          icon: icons.IconBrandSharik,
          breadcrumbs: false,
          url: '/customer/all',
          // target: true
        }
      ]
    }
  ]
};

export default pages;
