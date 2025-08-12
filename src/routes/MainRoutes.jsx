


import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const AllJobs = Loadable(lazy(() => import('views/all-jobs')));
const AppliedJobs = Loadable(lazy(() => import('views/applied-jobs')));
const MatchingJobs = Loadable(lazy(() => import('views/matching-jobs')));
const JobInProgress = Loadable(lazy(() => import('views/job-in-progress')));
const Transaction = Loadable(lazy(() => import('views/Transaction')));
const Invoice = Loadable(lazy(() => import('views/Invoice')));
const GIG = Loadable(lazy(() => import('views/GIG')));
const Status = Loadable(lazy(() => import('views/Status')));
const IdCard = Loadable(lazy(() => import('views/Idcard'))); // Ensure this points to your ID card file
const MyProfile = Loadable(lazy(() => import('views/MyProfile')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <DashboardDefault /> },
    { path: 'provider/dashboard', element: <DashboardDefault /> },
    { path: 'provider/all-jobs', element: <AllJobs /> },
    { path: 'provider/application', element: <AppliedJobs /> },
    { path: 'provider/matching-jobs', element: <MatchingJobs /> },
    { path: 'provider/active-service-requests', element: <JobInProgress /> },
    { path: 'provider/transaction', element: <Transaction /> },
    { path: 'provider/invoice', element: <Invoice /> },
    { path: 'provider/gig', element: <GIG /> },
    { path: 'provider/status', element: <Status /> },
    { path: 'provider/id-card', element: <IdCard /> },
    { path: 'provider/User-Profile', element: <MyProfile /> }
  ]
};

export default MainRoutes;
