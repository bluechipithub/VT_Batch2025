import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

import DashboardDefault from "../views/dashboard/Default";
import SamplePage from "../views/sample-page";
import AllServiceProvider from "../views/All-Service-Provider";
import MatchingProfiles from "../views/Matching-Profiles";
import Invoice from "../views/Invoice";
import PostFreeADs from "../views/Post-Free-ADs";
import ADsResponse from "../views/ADs-Response";
import AllPostedADs from "../views/All-Posted-ADs";


// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/customer/customer-dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'customer',
      children: [
        
        {
          path: 'customer-post',
          element: <PostFreeADs />
        },
        {
          path: 'application',
          element: <ADsResponse />
        },
        {
          path: 'all',
          element: <AllPostedADs />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    
    {
      path: 'all-service-provider',
      element: <AllServiceProvider />
    },
    {
      path: 'matching-profiles',
      element: <MatchingProfiles />
    },
    {
      path: 'invoice',
      element: <Invoice />
    }
  ]
};

export default MainRoutes;

