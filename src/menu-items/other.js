// assets
import { IconBrandChrome, IconHelp,IconPercentage25 , IconCalendarEvent, IconCircleDashedLetterA, IconBallFootball, IconBrandGitlab, IconTransitionTop, IconMinimize,IconEggs} from '@tabler/icons-react';
// import JosbsInProgress from '../views/jobs-in-progress';

// constant
const icons = { IconBrandChrome, IconHelp,IconPercentage25 , IconCalendarEvent, IconCircleDashedLetterA, IconBallFootball, IconBrandGitlab,IconTransitionTop, IconMinimize, IconEggs};

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
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
     {
      id: 'applied-jobs',
      title: 'Applied Jobs',
      type: 'item',
      url: '/provider/applied-jobs',
      icon: icons.IconCircleDashedLetterA,
      breadcrumbs: false
    },
    {
      id: 'matching-jobs',
      title: 'Matching Jobs',
      type: 'item',
      url: '/provider/matching-jobs',
      icon: icons.IconBallFootball,
      breadcrumbs: false
    },
     {
      id: 'jobs-in-progress',
      title: 'Josbs In Progress',
      type: 'item',
      url: '/provider/jobs-in-progress',
      icon: icons.IconBrandGitlab,
      breadcrumbs: false
    },
     {
      id: 'transaction',
      title: 'Transaction',
      type: 'item',
      url: '/provider/transaction',
      icon: icons.IconTransitionTop,
      breadcrumbs: false
    },
     {
      id: 'invoice',
      title: 'Invoice',
      type: 'item',
      url: '/provider/invoice',
      icon: icons.IconMinimize,
      breadcrumbs: false
    },
      {
      id: 'GIG',
      title: 'GIG',
      type: 'collapse',
      url: '/provider/GIG',
      icon: icons.IconEggs,
      breadcrumbs: false,
       children: [
        {
          id: 'GIG',
          title: 'GIG',
          type: 'item',
          url: '/provider/GIG',
         breadcrumbs: false
        },
        {
          id: 'Status',
          title: 'Status',
          type: 'item',
          url: '/provider/Status',
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
