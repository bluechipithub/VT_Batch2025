// assets
import { IconClipboardText,IconFileStack,IconFileDescription

, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconClipboardText,IconFileStack,IconFileDescription

, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: '',
  type: 'group',

  children: [
    // {
    //   id: '',
    //   title: '',
    //   type: 'item',
    //   url: '/sample-page',
    //   // icon: icons.IconBrandChrome,
    //   breadcrumbs: false
    // },
    
    {
       id: 'All Service Providers',
      title: 'All Service Providers',
      type: 'item',
      url: '/customer/service-provider-list',
      icon: icons.IconClipboardText
,
      breadcrumbs: false
    },
    {
      id: 'Matching Profiles',
      title: 'Matching Profiles',
      type: 'item',
      url: '/customer/matching-profiles',
      icon: icons.IconFileStack,
      breadcrumbs: false
    }, 
    {
      id: 'Invoice',
      title: 'Invoice',
      type: 'item',
      url: '/customer/invoice',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    }

    // {
    //   id: '',
    //   title: '',
      
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
