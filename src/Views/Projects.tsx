import Card from '../Component/Card';
import { projectData } from '../Data/ProjectData';

export default function Projects() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center m-8">
      {projectData.map((data) => (
        <Card
          key={data.Name}
          image={data.image}
          Tecnologies={data.Tecnologies}
          Name={data.Name}
          Description={data.Description}
          Url={data.Url}
        />
      ))}
    </div>
  );
}
