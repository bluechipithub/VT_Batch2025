// // import { lazy } from 'react';

// // project imports
// import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
// import GIG from '../views/pages/authentication/GIG';
// import Status from '../views/pages/authentication/Status';

// // maintenance routing
// const GIG = Loadable(lazy(() => import('views/pages/authentication/GIG')));
// const Status = Loadable(lazy(() => import('views/pages/authentication/Status')));

// // ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    // {
    //   path: '/provider/GIG',
    //   element: <GIG />
    // },
    // {
    //   path: '/provider/Status',
    //   element: <Status />
    // }
  ]
};

export default AuthenticationRoutes;
