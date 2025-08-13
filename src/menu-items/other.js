// assets
import { IconCalendar, IconHelp, IconClipboardText, IconFileAnalytics, IconFileDescription, IconTransactionRupee, IconList, IconStack3, IconCircleDot
 } from '@tabler/icons-react';

// constant
const icons = { IconCalendar, IconHelp, IconClipboardText, IconFileAnalytics, IconFileDescription, IconTransactionRupee, IconList, IconStack3, IconCircleDot
 };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'All Jobs',
      title: 'All Jobs',
      type: 'item', 
      url: '/provider/all-jobs',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'Applied Jobs',
      title: 'Applied Jobs',
      type: 'item',
      url: '/provider/application',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    },
    {
      id: 'Matching Jobs',
      title: 'Matching Jobs',
      type: 'item',
      url: '/provider/matching-jobs',
      icon: icons.IconList,
      breadcrumbs: false
    },
    {
      id: 'Jobs-In-Progess',
      title: 'Jobs-In-Progess',
      type: 'item',
      url: '/provider/active-service-requests',
      icon: icons.IconClipboardText,
      breadcrumbs: false
    },
    {
      id: 'Transactio',
      title: 'Transaction',
      type: 'item',
      url: '/provider/transaction',
      icon: icons.IconTransactionRupee,
      breadcrumbs: false
    },
    {
      id: 'Invoice',
      title: 'Invoice',
      type: 'item',
      url: '/provider/invoice',
      icon: icons.IconFileAnalytics,
      breadcrumbs: false
    },
    {
      id: 'GIG',
      title: 'GIG',
      type: 'collapse',
      url: '/GIG',
      icon: icons.IconStack3,
      breadcrumbs: false,
       children: [
        {
          id: 'GIG',
          title: 'GIG',
          type: 'item',
          url: '/provider/gig',
          icon: icons.IconCircleDot,
          breadcrumbs: false,
        },
        {
          id: 'Status',
          title: 'Status',
          type: 'item',
          url: '/provider/status',
          icon: icons.IconCircleDot,
          breadcrumbs: false,
        }
      ]
      
      
    },
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
