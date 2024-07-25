import './CardAnimation.css';

type cardAnimationProps = {
  icon: string;
  name: string;
  description: string;
  documentationUrl: string;
};

export default function CardAnimation({
  icon,
  name,
  description,
  documentationUrl,
}: cardAnimationProps) {
  return (
    <div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">{name}</span>
          <p className="card-content">{description}</p>
          <span
            className="see-more"
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
