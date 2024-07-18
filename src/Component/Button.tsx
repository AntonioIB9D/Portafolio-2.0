import { useNavigate } from 'react-router-dom';
import './button.css';

type ButtonProps = {
  title: string;
  route: string;
  fontColor: string;
};

export default function Button({ title, route, fontColor }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      className={
        fontColor === 'Blue'
          ? 'button-style hover:bg-slate-900 hover:text-blue-500 color: text-blue-300 button-hover  border-2 border-blue-300 hover:border-blue-500'
          : fontColor === 'Yellow'
          ? 'button-style hover:bg-slate-900 hover:text-yellow-500 color: text-yellow-300 button-hover border-2 border-yellow-300 hover:border-yellow-500'
          : fontColor === 'Green'
          ? 'button-style hover:bg-slate-900 hover:text-green-500 color: text-green-500 button-hover border-2 border-green-300 hover:border-green-500'
          : 'button-style'
      }
      onClick={() => navigate(`${route}`)}
    >
      <div className="flex gap-2 justify-center">{title}</div>
      <div className="star-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="star-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'auto',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  );
}
