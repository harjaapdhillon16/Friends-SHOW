import { useState } from 'react';
import { Container } from '../container/Container';
import { BsVolumeMuteFill } from 'react-icons/bs';
import { GoUnmute } from 'react-icons/go';
import BackgroundVideo from '../../assets/howyoudoin.mp4';
const MutedSVG = ({ muted }: { muted: boolean }) => <div>{muted ? <BsVolumeMuteFill /> : <GoUnmute />}</div>;

function Index() {
  const [muted, setMuted] = useState(true);
  return (
    <Container pageTitle="WELCOME" title="Home Page">
      <>
        <video
          autoPlay
          style={{ objectFit: 'cover' }}
          loop
          muted={muted}
          className="absolute z-[-10] hidden md:block w-screen min-w-full h-screen"
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZDc2NTg5YWUtZGZlZC00Y2VmLTgwZjEtZDUxM2QyNGRmYjZlXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg"
          className="absolute z-[-10] md:hidden w-screen min-w-full h-screen object-cover"
        />
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60" />
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md transition-all">
              <h1 className="mb-5 text-4xl font-bold italic customFont text-red-500">LOGIN WITH UNSTOPPABLE WAS SUCCESSFUL !</h1>
              <h1 className="mb-5 text-sm font-semibold italic customFont">
                Your username : {localStorage.getItem("uauth-default-username")}
              </h1>
            </div>
          </div>
          <div className="absolute z-10 bottom-3 right-3">
            <button
              onClick={() => setMuted(!muted)}
              className="rounded-full hidden md:block animate-pulse border-white border-4"
            >
              <div className="p-3 text-white">
                <MutedSVG muted={muted} />
              </div>
            </button>
          </div>
        </div>
      </>
    </Container>
  );
}

export default Index;
