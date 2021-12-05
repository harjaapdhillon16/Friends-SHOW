import { Helmet } from 'react-helmet-async';
import UAuth from '@uauth/js';

import { scrollToSmoothly } from '../../utils/smoothlyScroll';

type Props = {
  title: string;
  description?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
};

const SERVICE_NAME = 'FRIENDS';
const uauth = new UAuth({
  clientID: 'R4LSjs5j2Ko+wH0NDDjuHEJoywGrc2DCvdRq99mLVko=',
  clientSecret: 'n1eKo5GQjVs0fgufBv2rur1yt1z+HUqsv7UBJ7GtEFY=',
  redirectUri: 'http://localhost:3000/404',
});
export const Container = ({ title, description, children }: Props) => {
  const scrollToDetails = () => scrollToSmoothly(document.getElementById('AllCharacters')?.offsetTop || 20, 400);
  const loginWithNFT = async()=>{
    try{
      const authorization =await uauth.loginWithPopup();
      console.log(authorization)
    }catch(err){
      
    }
  }

  

  return (
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
            <button onClick={scrollToDetails} className="btn btn-ghost hover:bg-black btn-sm rounded-btn">
              Checkout All Characters !
            </button>
            <button
              onClick={loginWithNFT}
              className="btn btn-ghost hover:bg-black hover:scale-110 btn-sm rounded-btn"
            >
              Login With Unstoppable
              <img className="h-4 w-4 mx-2" src="https://gitcoin.co/dynamic/avatar/unstoppabledomains" />
            </button>
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
