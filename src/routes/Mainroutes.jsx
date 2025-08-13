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

// Dashboard1
const  Dashboard1 = Loadable(lazy(() => import('views/Dashboard1')));
// Dashboard2
const  Dashboard2 = Loadable(lazy(() => import('views/Dashboard2')));


const  ServiceProvider = Loadable(lazy(() => import('views/Dashbord1-Approvel-ServiceProvider')));
const  Customer = Loadable(lazy(() => import('views/Dashbord1-Approvel-Customer')));
const  Profile = Loadable(lazy(() => import('views/Dashbord1-Approvel-Profile')));
const  Ads = Loadable(lazy(() => import('views/Dashbord1-Approvel-Ads')));
const  Gigs = Loadable(lazy(() => import('views/Dashbord1-Approvel-Gigs')));

//* Approved 
const  ApprovedServiceProvider = Loadable(lazy(() => import('views/Dashbord1-Approved-ServiceProvider')));
const  ApprovedServiceProviderView = Loadable(lazy(() => import('views/Dashbord1-Approved-ServiceProvider/Approved-ServiceProvider-View')));


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
      path: 'admin/Dashboard1',
      element: <Dashboard1 />
    }
    ,
      {
      path: 'admin/Dashboard1/serviceprovider',
      element: < ServiceProvider />
    },
    
      {
      path: 'admin/Dashboard1/Customer',
      element: < Customer />
    }
    ,
      {
      path: 'admin/Dashboard1/Profile',
      element: < Profile />
    },
    {
      path: 'admin/Dashboard1/Ads',
      element: < Ads />
    },
    {
      path: 'admin/Dashboard1/Gigs',
      element: < Gigs />
    },
    // Approved service Provider
    {
      path: 'admin/Dashboard1/Approved/serviceprovider',
      element: < ApprovedServiceProvider />
    }, {
      path: 'admin/provider-details',
      element: < ApprovedServiceProviderView />
    },
    {
      path: 'admin/Dashboard2',
      element: <Dashboard2 />
    }
  ]
};

export default MainRoutes;
