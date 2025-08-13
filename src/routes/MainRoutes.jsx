import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Viewid = Loadable(lazy(() => import('views/viewid')));
const Profile = Loadable(lazy(() => import('views/profile')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AllJobs = Loadable(lazy(() => import('views/all-jobs')));
const AppliedJobs = Loadable(lazy(() => import('views/Applied-jobs')));
const MatchingJobs = Loadable(lazy(() => import('views/Matching-jobs')));
const JobInProgess = Loadable(lazy(() => import('views/job-in-progess')));
const TransactionListPage = Loadable(lazy(() => import('views/transaction')));
const Invoice = Loadable(lazy(() => import('views/invoice')));

// Dropdown Pages
const GIG = Loadable(lazy(() => import('views/GIG')));
const Status = Loadable(lazy(() => import('views/status')));

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
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: '/provider/all-jobs',
      element: <AllJobs />
    },
    {
      path: '/provider/application',
      element: <AppliedJobs />
    },
    {
      path: '/provider/matching-jobs',
      element: <MatchingJobs />
    },
    {
      path: '/provider/active-service-requests',
      element: <JobInProgess />
    },
    {
      path: '/provider/transaction',
      element: <TransactionListPage />
    },
    {
      path: '/provider/invoice',
      element: <Invoice />
    },
    {
      path: '/provider/GIG',
      element: <GIG />
    },
    {
      path: '/provider/status',
      element: <Status />
    },
    {
      path: '/provider/id-card',
      element: <Viewid />
    },
    {
      path: '/provider/profile',
      element: <Profile />
    }
   
   
  ]
  
};

export default MainRoutes;
