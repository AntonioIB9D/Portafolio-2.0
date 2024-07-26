import Lottie from 'lottie-react';
import animationContact from '../../public/Contact.json';
import Button from '../Component/Button';

export default function About() {
  return (
    <div className="flex flex-col gap-2 m-4">
      <h1 className="text-4xl font-bold text-center">Contacto</h1>
      <p className="text-center text-pretty p-4">
        Aquí puedes <span className="font-bold text-blue-300">consultar</span>{' '}
        mi <b>información</b> de{' '}
        <span className="font-bold text-yellow-300">contacto</span>.
      </p>
      <div className="flex flex-col gap-4 items-center justify-center m-4">
        <Lottie animationData={animationContact} className="w-1/2 h-1/2" />
        <p className="font-bold">
          Correo:{' '}
          <span className="text-orange-500">antonio.ibarra99@outlook.es</span>
        </p>
        <p className="font-bold">
          Whatsapp: <span className="text-green-500">664-791-8085</span>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Button title="Volver" route="/" fontColor="Green" />
      </div>
    </div>
  );
}
