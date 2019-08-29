import { lazy } from 'react';

const Home = lazy(() => import('~/pages/Home'));

const routes = [{ path: '/home', exact: true, name: 'Home', component: Home }];

export default routes;
