import "../styles/Resources.css";

export default function ResourceCard({ resource }) {
  return (
    <a
      href={resource.disabled ? "#" : resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`resource-card ${resource.disabled ? "disabled" : ""}`}
    >
      <div className="resource-content">
        <img src={resource.icon} alt="" className="resource-icon" />
        <p className="resource-title">{resource.title}</p>
      </div>
    </a>
  );
}
