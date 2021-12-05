import './indexStyles.scss';

interface Props {
  name: string;
  img: string;
  age?: string;
  traits?: string;
  transformOrigin?: string;
}

export const CharacterCard = ({ name, img, age, traits, transformOrigin }: Props) => {
  const traitsArray = traits?.split(',');
  return (
    <div className={`characterCard m-1 ${transformOrigin}`}>
      <img src={img} alt={name} className="w-full object-cover h-80 lg:h-[50vh]" />
      <div className="ageAndTraits">
        <p className="text-white text-2xl font-bold customFont">{name}</p>
        <p className="text-green-500">{age} years old</p>
        {traitsArray?.map((item, index) => (
          <span key={item} className="text-red-500">
            - {item}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};
