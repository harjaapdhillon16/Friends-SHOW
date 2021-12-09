import { lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { uauth } from '~/utils/unstoppableDomain';

const IndexScreen = lazy(() =>
  import('~/components/screens/Index').then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 2000);
    });
  })
);

const LoggedIn = lazy(() => import('~/components/screens/LoggedIn'));
const CallBack = lazy(() => import('~/components/screens/Callback'));

export const Router = () => {
  const [profile, setProfile] = useState<any>(null);

  const fetchUser = () => {
    uauth.user().then((data) => {
      if (data) {
        setProfile(data);
      } else {
        setProfile(false);
      }
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexScreen />
          </Route>

          <Route exact path="/callback">
            <CallBack />
          </Route>

          <Route exact path="/loggedIn">
            <LoggedIn />
          </Route>

          {profile ? <Redirect to="/loggedIn" /> : <Redirect to="/" />}
        </Switch>
      </BrowserRouter>
    </>
  );
};
