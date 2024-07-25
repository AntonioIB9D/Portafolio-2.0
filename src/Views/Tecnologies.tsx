import Button from '../Component/Button';
import CardAnimation from '../Component/CardAnimation';
import { tecnologiesData } from '../Data/TecnologiesData';

export default function Tecnologies() {
  return (
    <div className="flex flex-col gap-2 m-4">
      <h1 className="text-4xl font-bold text-center">Tecnologías</h1>
      <p className="text-center text-pretty p-4">
        Aquí puedes <span className="font-bold text-blue-300">consultar</span>{' '}
        algunas de las <b>tecnologías</b> que{' '}
        <span className="font-bold text-yellow-300">utilizo</span>.
      </p>
      <div className="flex flex-wrap gap-2 items-center justify-center m-4">
        {tecnologiesData.map((data) => (
          <CardAnimation
            key={data.name}
            icon={data.icon}
            name={data.name}
            description={data.description}
            documentationUrl={data.documentationUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button title="Volver" route="/" fontColor="Yellow" />
      </div>
    </div>
  );
}
