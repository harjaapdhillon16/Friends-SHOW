import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Main from '~/components/root/Main';

export const Loading = ({ title }: any) => (
  <div
    style={{
      backgroundImage:
        'url(https://m.media-amazon.com/images/M/MV5BZDc2NTg5YWUtZGZlZC00Y2VmLTgwZjEtZDUxM2QyNGRmYjZlXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg)',
    }}
    className="hero h-screen"
  >
    <div style={{ maxWidth: '100vw' }} className="bg-black w-screen h-screen bg-opacity-80 hero-content">
      <p className="text-5xl text-red-500 font-extrabold animate-bounce italic">
        {title || 'Loading Up the Friends Experience for you !'}
      </p>
    </div>
  </div>
);

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <Main />
      </HelmetProvider>
    </Suspense>
  );
};
