import "../styles/People.css";

export default function PeopleCard({ person }) {
  return (
    <div className="person-card">
      <img src={person.image} alt="" className="person-image" />
      <h3 className="person-title">{person.title}</h3>
      <p className="person-designation">{person.designation}</p>
      {person.link && (
        <a
          href={person.link}
          target="_blank"
          rel="noopener noreferrer"
          className="person-link"
        >
          {person.button_text}
        </a>
      )}
    </div>
  );
}
