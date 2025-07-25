import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));

const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// page routing
const AllJobs = Loadable(lazy(() => import('views/all-jobs')));
const AppliedJobs = Loadable(lazy(() => import('views/applied-jobs')));
const MatchingJobs = Loadable(lazy(() => import('views/matching-jobs')));
const JobsInProgress = Loadable(lazy(()=> import('views/jobs-in-progress')));
const Transaction= Loadable(lazy(()=> import('views/transaction')));
const Invoice= Loadable(lazy(()=> import('views/invoice')));
const GIG= Loadable(lazy(()=> import('views/GIG')));
const Status= Loadable(lazy(()=> import('views/Status')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'provider',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <UtilsTypography />
    },
   
   
    {
      path: 'color',
      element: <UtilsColor />
    },
    {
      path: 'shadow',
      element: <UtilsShadow />
    },
     {
      path: '/provider/all-jobs',
      element: <AllJobs />
    },
     {
      path: '/provider/applied-jobs',
      element: <AppliedJobs/>
    },
     {
      path: '/provider/matching-jobs',
      element: <MatchingJobs/>
    },
     {
      path: '/provider/jobs-in-progress',
      element: <JobsInProgress/>
    },
    {
      path: '/provider/transaction',
      element: <Transaction/>
    },
     {
      path: '/provider/invoice',
      element: <Invoice/>
    },
     {
      path: '/provider/GIG',
      element: <GIG/>
    },
    {
      path: '/provider/Status',
      element: <Status/>
    }
  ]
};

export default MainRoutes;
