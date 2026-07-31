import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title, description, icon, path, color }) {
  return (
    <Link
      to={path}
      className="card"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div
        className="card-icon"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {icon}
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button className="card-btn">Open →</button>
    </Link>
  );
}

export default Card;