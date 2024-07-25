import Button from '../Component/Button';
import Card from '../Component/Card';
import { projectData } from '../Data/ProjectData';

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-2 m-4">
        <h1 className="text-4xl font-bold text-center">Mis proyectos</h1>
        <p className="text-center text-pretty p-4">
          Aquí puedes <span className="font-bold text-blue-300">consultar</span>{' '}
          algunos de mis <b>trabajos</b> más{' '}
          <span className="font-bold text-yellow-300">recientes</span>.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center m-4">
          {projectData.map((data) => (
            <Card
              key={data.Name}
              imageP={data.imageP}
              Tecnologies={data.Tecnologies}
              Name={data.Name}
              Description={data.Description}
              Url={data.Url}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button title="Volver" route="/" fontColor="Blue" />
        </div>
      </div>
    </>
  );
}
