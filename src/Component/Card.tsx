import ButtonEffect from './ButtonEffect';

type cardDataProps = {
  imageP: string;
  Tecnologies: string;
  Name: string;
  Description: string;
  Url: string;
};

export default function Card({
  imageP,
  Tecnologies,
  Name,
  Description,
  Url,
}: cardDataProps) {
  return (
    <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-80 w-80  rounded-2xl hover:duration-700">
      <div className="w-80 h-80 bg-gray-50 text-gray-800">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src={imageP}
            alt="Imagen de proyecto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bg-gray-50 -bottom-24 w-80 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-lime-600 font-bold text-xs">{Tecnologies}</span>
        <span className="text-gray-800 font-bold text-3xl text-pretty">
          {Name}
        </span>
        <p className="text-neutral-800">{Description}</p>
        <p className="text-neutral-800">{Url}</p>
        <div className="flex justify-center">
          <ButtonEffect />
        </div>
      </div>
    </div>
  );
}
