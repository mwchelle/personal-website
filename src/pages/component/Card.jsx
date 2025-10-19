import { useState } from "react";
import "./Card.css"; // Import the CSS file

export default function Card({
  title,
  titleColor,
  image,
  tags,
  link,
  description,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Tags in the Top Right */}
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Project Title */}
      <h2 className="project-title" style={{ color: titleColor }}>
        {title} ↗
      </h2>

      {/* Hovered Description */}
      {hovered && <div className="description">{description}</div>}
    </a>
  );
}
