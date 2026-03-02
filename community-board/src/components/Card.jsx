export default function Card({ title, instructor, time, level, link, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <h2>{title}</h2>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Level:</strong> {level}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      )}
    </div>
  );
}
