import React from 'react';
import {Layout} from './component/Layout';
import {Home} from './slides/home';

// Dynamically import all slides
const slideModules = import.meta.glob('./slides/slide*.tsx');
const slideRoutes = Object.entries(slideModules)
  .map(([path, module]) => {
    const slideNumber = path.match(/slide(\d+)\.tsx$/)?.[1];
    return {
      path: `slide-${slideNumber}`,
      number: Number(slideNumber),
      element: module().then(mod => {
        const Slide = mod.App;
        return <Slide />;
      }),
    };
  })
  .sort((a, b) => a.number - b.number)
  .map(({path, element}) => ({path, element}));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/slides',
    element: <Layout />,
    children: slideRoutes,
  },
];

export default routes;
