import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
};

const SERVICE_NAME = 'FRIENDS';

export const Container = ({ title, description, children }: Props) => (
  <div>
    <Helmet>
      <title>{`${title} | ${SERVICE_NAME}`}</title>
      <meta name="description" content={description ?? `This is ${SERVICE_NAME}`} />
      <meta property="og:title" content={`${title} | ${SERVICE_NAME}`} />
      <meta property="og:description" content={description ?? `This is ${SERVICE_NAME}`} />
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="navbar shadow-lg w-screen justify-between bg-red-500 text-neutral-content rounded-none">
      <div className="flex-none px-2 ">
        <span className="text-lg font-extrabold customFont">AS SEEN ON NETFLIX</span>
      </div>
      <div className="items-end px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <a className="btn btn-ghost hover:bg-black btn-sm rounded-btn">Checkout All Characters !</a>
          <a className="btn btn-ghost hover:bg-black btn-sm rounded-btn">STORY BEHIND FRIENDS</a>
          <a className="btn btn-ghost hover:bg-black hover:scale-110 btn-sm rounded-btn animate-pulse">
            Login With Unstoppable{' '}
            <span>
              <img className="h-4 w-4 mx-2" src="https://gitcoin.co/dynamic/avatar/unstoppabledomains" />
            </span>{' '}
            !
          </a>
        </div>
      </div>
    </div>
    {children}
  </div>
);
