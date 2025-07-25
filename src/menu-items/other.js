// assets
import { IconBrandChrome, IconHelp,IconChecklist,IconClipboardList, IconFileInvoice } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp,IconChecklist,IconClipboardList, IconFileInvoice };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: '/sample-page', 
    //   icon: icons.IconBrandChrome,
    //   breadcrumbs: false
    // },
    //  {
    //   id: 'YourADsResponse',
    //   title: 'Your ADs & Response',
    //   type: 'item',
    //   url: '/Your-ADs-&-Response', 
    //   icon: icons.IconBrandChrome,
    //   breadcrumbs: false
    // },
    {
      id: '/Your-ADs-Response',
      title: 'Your ADs & Response',
      type: 'collapse', 
      icon: icons.IconChecklist,
    },

    {
      id: 'All-Service-Provider',
      title: 'All Service Provider\'s',
      type: 'item',
      url: '/All-Service-Provider', 
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: 'Matching-Profiles',
      title: 'Matching Profiles',
      type: 'item',
      url: '/Matching-Profiles', 
      icon: icons.IconClipboardList,
      breadcrumbs: false
    },
     {
      id: 'Invoice',
      title: 'Invoice',
      type: 'item',
      url: '/Invoice', 
      icon: icons. IconFileInvoice,
      breadcrumbs: false
    }
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
  ]
  
};

export default other;
