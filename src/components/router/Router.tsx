import { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const IndexScreen = lazy(() =>
  import('~/components/screens/Index').then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 4000);
    });
  })
);

const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexScreen />
          </Route>
          <Route path="*">
            <Page404Screen />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
