export const IndexSummary = () => (
  <div className="relative flex items-center justify-center h-screen overflow-hidden ">
    <div className="relative z-30 p-5 text-2xl text-white bg-black w-screen h-screen bg-opacity-50">
      <p className="text-4xl font-bold customFont">What is friends ?</p>
    </div>
    <video autoPlay style={{ objectFit: 'cover' }} loop muted className="absolute z-10 w-screen min-w-full h-screen">
      <source
        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
);
