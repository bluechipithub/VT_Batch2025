import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Profile = Loadable(lazy(() => import('views/profile')));


// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const AllServiceProviders= Loadable(lazy(() => import('views/All-Service-Providers')));
const MatchingProfiles= Loadable(lazy(() => import('views/Matching-Profiles')));
const Invoice= Loadable(lazy(() => import('views/Invoice')));

// Dropdown page
const PostFreeADs= Loadable(lazy(() => import('views/Post-Free-ADs')));
const ADsResponse= Loadable(lazy(() => import('views/ADs-Response')));
const AllPostedADs= Loadable(lazy(() => import('views/All-Posted-ADs')));
const PathDashboard= Loadable(lazy(() => import('views/Path-Dashboard')));








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
    {
      path: '/sample-page',
      element: <SamplePage />
    },
     {
      path: '/customer/service-provider-list',
      element: <AllServiceProviders />
    },
     {
      path: '/customer/matching-profiles',
      element: <MatchingProfiles />
    },
    {
      path: '/customer/invoice',
      element: <Invoice />
    },
    {
      path: 'customer/Customers-Post',
      element: <PostFreeADs />
    },
    {
      path: '/customer/application',
      element: <ADsResponse/>
    },
    {
      path: '/customer/all',
      element: <AllPostedADs/>
    },
    {
      path: '/customer/customer_dashboard',
      element: <PathDashboard/>
    },
    {
      path: '/customer/user-profile',
      element: <Profile/>
    },
  ]
};

export default MainRoutes;
