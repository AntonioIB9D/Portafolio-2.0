import './CardAnimation.css';

type cardAnimationProps = {
  icon: string;
  name: string;
  description: string;
  documentationUrl: string;
  fontColor: string;
};

export default function CardAnimation({
  icon,
  name,
  description,
  documentationUrl,
  fontColor,
}: cardAnimationProps) {
  return (
    <div className="parent">
      <div className="card">
        <div className="content-box">
          <span
            className={
              fontColor === 'Blue'
                ? 'card-title  text-blue-500'
                : fontColor === 'Yellow'
                ? 'card-title  text-yellow-500'
                : fontColor === 'Green'
                ? 'card-title  text-green-500'
                : 'card-title'
            }
          >
            {name}
          </span>
          <p className="card-content">{description}</p>
          <span
            className="see-more rounded-full"
            onClick={() => window.open(documentationUrl, '_blank')}
          >
            Documentación
          </span>
        </div>
        <div className="date-box flex items-center">
          <span className="date">
            <img src={icon} alt="Imagen de Tecnología" />
          </span>
        </div>
      </div>
    </div>
  );
}
