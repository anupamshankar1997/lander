import "../styles/Tools.css";

export default function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <img src={tool.logo} alt="" className="tool-logo" />
      <div className="tool-description">{tool.description}</div>
      <div className="tool-button-wrapper">
        <a
          href={tool.disabled ? "#" : tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`tool-button ${tool.disabled ? "disabled" : ""}`}
        >
          {tool.button_text}
        </a>
      </div>
    </div>
  );
}
