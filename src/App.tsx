import Lottie from 'lottie-react';
import animationData from '../public/Animation.json';
import Button from './Component/Button';
import './app.css';

function App() {
  return (
    <>
      <div className="content-main-elements">
        <div>
          <p className="inline-block bg-[#345870] p-2 text-sm font-bold">
            Bienvenido a mi portafolio
          </p>
        </div>
        <p className="font-bold text-4xl text-pretty">
          Hola, soy <span className="text-blue-400">Antonio Ibarra</span>
        </p>
        <p className="text-pretty">
          <span className="font-bold">Desarrollador web Jr</span> con menos de
          un año de experiencia. Disfruto crear{' '}
          <span className="font-bold text-blue-300">interfaces elegantes</span>{' '}
          y <span className="font-bold text-yellow-300">eficientes</span>.
        </p>
        <div className="flex justify-evenly">
          <Lottie animationData={animationData} className="image-content" />
        </div>
        <div className="buttons">
          <Button title="Portafolio" route="/Projects" fontColor="Blue" />
          <Button title="Tecnologías" route="/Tecnologies" fontColor="Yellow" />
          <Button title="Acerca" route="/About" fontColor="Green" />
        </div>
      </div>
    </>
  );
}

export default App;
