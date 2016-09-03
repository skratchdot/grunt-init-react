import {
  ActionHome, ActionInfo, ActionThumbsUpDown, AlertWarning, ImageRemoveRedEye
} from 'material-ui/svg-icons';
import About from '~/src/app/pages/About';
import App from '~/src/app/containers/App';
import Counter from '~/src/app/pages/Counter';
import Echo from '~/src/app/pages/Echo';
import Home from '~/src/app/pages/Home';
import Immutable from 'immutable';
import NotFound from '~/src/app/pages/NotFound';
import React from 'react';
import { Route } from 'react-router';
import packageInfo from '~/package.json';

const icons = {
  home: <ActionHome />,
  about: <ActionInfo />,
  counter: <ActionThumbsUpDown />,
  echo: <ImageRemoveRedEye />,
  notfound: <AlertWarning />
};
let routes = Immutable.fromJS([
  {
    key: 'home',
    path: `/${packageInfo.name}`,
    component: Home,
    title: 'Homepage'
  },
  {
    key: 'about',
    path: `/${packageInfo.name}/about`,
    component: About,
    title: 'About'
  },
  {
    key: 'counter',
    path: `/${packageInfo.name}/counter`,
    component: Counter,
    title: 'Counter'
  },
  {
    key: 'echo',
    path: `/${packageInfo.name}/echo(/:echo)`,
    link: `/${packageInfo.name}/echo`,
    component: Echo,
    title: 'Echo'
  },
  {
    key: 'notfound',
    path: '*',
    component: NotFound,
    title: '404 - Not Found'
  }
]);
routes = routes.map((route) => {
  const key = route.get('key');
  route = route.set('icon', icons[key]);
  if (!route.has('link')) {
    route = route.set('link', route.get('path'));
  }
  return route;
});

export function getRouteList() {
  return routes.toList();
}

export function getRoutes() {
  return (
    <Route component={App}>
      {routes.map((route) => <Route
        key={route.get('key')}
        path={route.get('path')}
        component={route.get('component')}
      />)}
    </Route>
  );
}

export default getRoutes();
