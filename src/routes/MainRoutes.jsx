import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Dashboard1 = Loadable(lazy(() => import('views/Dashboard1')));
const Dashboard2 = Loadable(lazy(() => import('views/Dashboard2')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
// const AllServiceProder = Loadable(lazy(() => import('views/all-service-provider')));
// const MatchingProfiles = Loadable(lazy(() => import('views/matching-profiles')));
// const Invoice = Loadable(lazy(() => import('views/invoice')));

// Admin Approvals routing
const ApprovelsServiceProvider = Loadable(lazy(() => import('views/Dashboard1-Approvels-ServiceProvider')));
const ApprovelsCustomer = Loadable(lazy(() => import('views/Dashboard1-Approvels-Customer')));
const ApprovelsProfile = Loadable(lazy(() => import('views/Dashboard1-Approvels-Profile')));
const ApprovelsAds = Loadable(lazy(() => import('views/Dashboard1-Approvels-Ads')));
const ApprovelsGigs = Loadable(lazy(() => import('views/Dashboard1-Approvels-Gigs')));

// Admin Rejected routing
const RejectedServiceProvider = Loadable(lazy(() => import('views/Dashboard1-Rejected-ServiceProvider')));
const Rejectedcustomer = Loadable(lazy(() => import('views/Dashboard1-Rejected-Customer')));
const RejectedAds = Loadable(lazy(() => import('views/Dashboard1-Rejected-Ads')));
const RejectedGigs = Loadable(lazy(() => import('views/Dashboard1-Rejected-Gigs')));



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
      path: 'dashboard',
      children: [
        {
          path: 'default',
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
    // {
    //   path: 'customer/service-provider-list',
    //   element: < AllServiceProder/>
    // },
    // {
    //   path: 'customer/matching-profiles',
    //   element: < MatchingProfiles/>
    // },
    // {
    //   path: 'customer/invoice',
    //   element: < Invoice/>
    // } ,
    {
      path: 'Admin/Dashboard2',
      element: < Dashboard2/>
    }, 
    {
      path: 'Admin/Dashboard1',
      element: < Dashboard1/>
    }, 
      {
      path: '/Admin/Dashboard1/approvels/serviceprovider',
      element: < ApprovelsServiceProvider/>
    }, 
     {
      path: '/Admin/Dashboard1/approvels/customer',
      element: < ApprovelsCustomer/>
    },
     {
      path: '/Admin/Dashboard1/approvels/profile',
      element: < ApprovelsProfile/>
    },
    {
      path: '/Admin/Dashboard1/approvels/Ads',
      element: < ApprovelsAds/>
    },
    {
      path: '/Admin/Dashboard1/approvels/Gigs',
      element: < ApprovelsGigs/>
    },
    {
      path: '/Admin/Dashboard1/Rejected/serviceprovider',
      element: < RejectedServiceProvider/>
    }, 
    {
      path: '/Admin/Dashboard1/Rejected/Customer',
      element: < Rejectedcustomer/>
    }, 
    {
      path: '/Admin/Dashboard1/Rejected/Ads',
      element: < RejectedAds/>
    }, 
    {
      path: '/Admin/Dashboard1/Rejected/gigs',
      element: < RejectedGigs/>
    }, 
  ]
};

export default MainRoutes;
