import { useEffect } from 'react';
import { uauth } from '../../utils/unstoppableDomain';
import { useHistory } from 'react-router-dom';
import { Loading } from '../root/App';

// eslint-disable-next-line no-undef
const CallBack = (): JSX.Element => {
  const { push } = useHistory();
  useEffect(() => {
    uauth.loginCallback().then((res) => {
      push('/loggedIn');
    });
  }, []);

  return <Loading title="Loading, Please wait !" />;
};

export default CallBack;
