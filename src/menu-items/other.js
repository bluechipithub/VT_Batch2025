/* eslint-disable prettier/prettier */
// assets
import { IconBook2, IconSwipe,IconStopwatch,IconBrandChrome,IconSquareHalf, IconClipboardList,IconTransactionRupee, IconNotification , IconHelp ,IconFileInvoice } from '@tabler/icons-react';
// constant
const icons = { IconBook2 , IconSwipe,IconStopwatch,IconBrandChrome, IconSquareHalf, IconClipboardList,IconTransactionRupee, IconNotification, IconHelp , IconFileInvoice };
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //
const other = {
id: 'sample-docs-roadmap',
type: 'group',
children: [
{
id: 'all-jobs',
title: 'All Jobs',
type: 'item',
url: '/provider/all-jobs',
icon: icons.IconBook2,
breadcrumbs: false
},
{
id: 'applied-jobs',
title: 'Applied Jobs',
type: 'item',
url: '/provider/application',
icon: icons.IconNotification,
breadcrumbs: false
},
{
id: 'matching-jobs',
title: 'Matching Jobs',
type: 'item',
url: '/provider/matching-jobs',
icon: icons.IconSquareHalf,
breadcrumbs: false
},
{
id: 'job-in-progress',
title: 'Job In Progress',
type: 'item',
url: '/provider/active-service-requests',
icon: icons.IconClipboardList,
breadcrumbs: false
},
{
id: 'transaction',
title: 'Transaction',
type: 'item',
url: '/provider/transaction',
icon: icons.IconTransactionRupee,
breadcrumbs: false
},
{
id: 'invoice',
title: 'Invoice',
type: 'item',
url: '/provider/invoice',
icon: icons.IconFileInvoice,
breadcrumbs: false
},
{
id: 'GIG',
title: 'GIG',
type: 'collapse',
icon: icons.IconSwipe,
children: [
{
id: 'GIG',
title: 'GIG',
type: 'item',
url: '/provider/GIG',
icon: icons.IconSwipe,
breadcrumbs: false

},
{
id: 'Status',
title: 'Status',
type: 'item',
url: '/provider/Status',
icon: icons.IconStopwatch,
breadcrumbs: false
}
]
}
// {
//   id: 'documentation',
//   title: 'Documentation',
//   type: 'item',
//   url: 'https://codedthemes.gitbook.io/berry/',
//   icon: icons.IconHelp,
//   external: true,
//   target: true
// }
]
};
export default other;