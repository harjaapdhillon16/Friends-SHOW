import { CharacterCard } from './CharacterCard';

// eslint-disable-next-line no-undef
export const AllCharacters = (): JSX.Element => {
  const data = [
    {
      name: 'Joey Tribiane',
      img: 'https://i.pinimg.com/236x/53/d0/92/53d092e8305a2c0e6840c417e533b07f.jpg',
      age: '28',
      traits: 'Cool Natured,Jolly,Amazing Person',
    },
    {
      name: 'Chandler Bing',
      img: 'https://i.pinimg.com/550x/35/5f/76/355f76eadb0b1670300f8d24b82e837b.jpg',
      age: '26',
      traits: 'Fearing,Sarcastic,Good At Accounting',
      transformOrigin: 'transformOriginLeftPartial',
    },
    {
      name: 'Ross Geller',
      img: 'https://i.pinimg.com/originals/58/24/86/582486eb19b1088bcd33e3efc4189d68.jpg',
      age: '30',
      traits: 'Nerdy,Scientist,Dinosaurs is passion',
      transformOrigin: 'transformOriginLeft',
    },
    {
      name: 'Monica Geller',
      img: 'https://preview.redd.it/0bu0l09bs0751.jpg?auto=webp&s=997510dc2c4196e35af44a867337bc2050a30057',
      age: '27',
      traits: 'Cooking is life,Perfectionist',
    },
    {
      name: 'Rachel Green',
      img: 'https://www.pinkvilla.com/imageresize/jennifer-anistons-character-rachel-green-in-friends-was-almost-replaced_.jpg?width=752&format=webp&t=pvorg',
      age: '27',
      traits: 'Rich Father,Flirty,Relaxed',
      transformOrigin: 'transformOriginLeftPartial',
    },
    {
      name: 'Phoebe Buffay',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F06%2F27%2FPhoebe-TOW-Phoebe-s-Rats-phoebe-buffay-3821632-768-576.jpg&q=85',
      age: '31',
      traits: 'Has a twin sister,Cool Natured',
      transformOrigin: 'transformOriginLeft',
    },
  ];

  return (
    <>
      <div id="AllCharacters" className="bg-black pt-4">
        <p className="text-3xl w-[90%] mx-auto text-white font-bold customFont">All Characters</p>
        <div className="w-[90%] mx-auto grid grid-cols-3 mt-4">
          {data.map((item) => (
            <CharacterCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
