import BackgroundImage from '../../assets/background.jpeg';
import { Container } from '../container/Container';
import { IndexSummary } from '../screenComponents/Index';

function Index() {
  return (
    <Container title="Home Page">
      <>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className="hero-overlay bg-opacity-60" />
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md transition-all">
              <h1 className="mb-5 text-6xl font-bold italic customFont text-red-500">FRIENDS ARE HERE !</h1>
              <h1 className="mb-5 text-sm font-semibold italic customFont">
                Your favourite TV show from 1994 is back !
              </h1>
              <button className="btn hover:scale-110 mt-3 hover:bg-red-500 animate-bounce bg-red-500">Get Started</button>
            </div>
          </div>
        </div>
        <IndexSummary />
      </>
    </Container>
  );
}

export default Index;
