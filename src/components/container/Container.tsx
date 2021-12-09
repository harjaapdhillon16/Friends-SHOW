import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { uauth } from '../../utils/unstoppableDomain';

type Props = {
  title: string;
  description?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
  pageTitle?: string;
};

const SERVICE_NAME = 'FRIENDS';

export const Container = ({ title, description, children, pageTitle }: Props) => {
  const login = async () => {
    try {
      await uauth.login();
    } catch (err) {
      console.log(err);
    }
  };
  const [loading, setLoading] = useState<any>(false);

  const [profile, setProfile] = useState<any>(null);

  const fetchUser = () => {
    uauth
      .user()
      .then((data) => {
        if (data) {
          setProfile(data);
        } else {
          setProfile(false);
        }
      })
      .catch((_err) => {});
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      await uauth.logout();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${title} | ${SERVICE_NAME}`}</title>
        <meta name="description" content={description ?? `This is ${SERVICE_NAME}`} />
        <meta property="og:title" content={`${title} | ${SERVICE_NAME}`} />
        <meta property="og:description" content={description ?? `This is ${SERVICE_NAME}`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="navbar overflow-hidden items-center shadow-lg w-screen justify-between bg-red-500 text-neutral-content rounded-none">
        <div className="flex-none px-1 ">
          <span className="text-xs font-extrabold customFont">{pageTitle}</span>
        </div>
        <div className="items-end px-1 mx-2">
          <div className="items-stretch flex">
            {profile ? (
              <button
                onClick={logout}
                className={`btn btn-ghost hover:bg-black hover:scale-110 btn-sm rounded-btn ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                Logout
                <img className="h-4 w-4 mx-2" src="https://gitcoin.co/dynamic/avatar/unstoppabledomains" />
              </button>
            ) : (
              <button onClick={login} className="btn btn-ghost hover:bg-black hover:scale-110 btn-sm rounded-btn">
                Login With Unstoppable
                <img className="h-4 w-4 mx-2" src="https://gitcoin.co/dynamic/avatar/unstoppabledomains" />
              </button>
            )}
          </div>
        </div>
      </div>
      {children}
      <div className="w-screen bg-black min-h-[300px] text-center p-5 text-white">
        <p className="text-2xl translate-y-[140px]">
          Built by ❤️ on REACT and VITE.JS @2021 BY{' '}
          <a
            href="https://twitter.com/_harjaapdhillon"
            target="_blank"
            className="text-red-500 font-bold hover:underline"
            rel="noreferrer"
          >
            Harjaap Dhillon
          </a>
        </p>
      </div>
    </div>
  );
};
