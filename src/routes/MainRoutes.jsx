/* eslint-disable prettier/prettier */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MatchingJobs from '../views/matching-jobs';
import JobInProgress from '../views/job-in-progress';
import Transaction from '../views/Transaction';
import Invoice from '../views/Invoice';
import GIG from '../views/GIG';
import Status from '../views/Status';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const AllJobs = Loadable(lazy(() => import('views/all-jobs')));
const Appliedjobs = Loadable(lazy(() => import('views/applied-jobs')));
// const JobInProgress = Loadable(lazy(() => import('views/job-in-progress')));

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
      path: '/provider/application',
      element: <Appliedjobs />
    },
     {
      path: '/provider/matching-jobs',
      element: <MatchingJobs />
     },
   {
      path: '/provider/active-service-requests',
      element: <JobInProgress />
    },
    {
      path: '/provider/transaction',
      element: <Transaction />
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
      path: '/provider/Status',
      element: <Status />
    }
  ]
};

export default MainRoutes;

