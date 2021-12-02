import BackgroundImage from '../../../assets/background.jpeg';

export const IndexSummary = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${BackgroundImage})` }} className="hero min-h-screen">
        <div
          style={{ maxWidth: '100vw' }}
          className="relative z-30 p-5 text-2xl text-white hero-content bg-black h-screen bg-opacity-80"
        >
          <div>
            <p className="text-4xl font-bold customFont mb-5">What is Friends about !</p>
            <p className="text-base font-normal customFont self-center sm:w-screen md:w-[60%]">
              Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC
              from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer
              Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves
              around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by
              Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive
              producers were Kevin S. Bright, Kauffman, and Crane.
            </p>
            <div className="absolute bottom-0" id="descriptionOfFriends" />
          </div>
        </div>
      </div>
      <div />
    </>
  );
};
