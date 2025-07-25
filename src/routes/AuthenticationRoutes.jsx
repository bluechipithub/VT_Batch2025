import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// maintenance routing



// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: 'views/Your-ADs-Response',
  element: <MinimalLayout />,
  children: [
    // {
    //   path: '/pages/Post-Free-ADs',
    //   element: <LoginPage />
    // },
    // {
    //   path: '/pages/ADs-Response',
    //   element: <RegisterPage />
    // },
    //  {
    //   path: '/pages/All-Posted-ADs',
    //   element: <PostedPage />
    // }
  ]
};

export default AuthenticationRoutes;
