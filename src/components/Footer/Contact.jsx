export default function Contact({ link }) {
  return (
    <a className="contact" href={link} target="_blank" rel="noreferrer">
      <i className="bi bi-chat-dots-fill contact__icon"></i>
    </a>
  );
}
