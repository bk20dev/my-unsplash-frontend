const Photo = ({ src, label }) => (
  <figure>
    <img src={src} alt={label} />
    <figcaption>{label}</figcaption>
  </figure>
);

export default Photo;
