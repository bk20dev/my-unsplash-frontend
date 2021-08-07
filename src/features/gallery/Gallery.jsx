import Photo from './Photo';

const Gallery = ({ photos }) => {
  return (
    <div>
      {photos.map(({ id, url, label }) => (
        <Photo key={id} src={url} label={label} />
      ))}
    </div>
  );
};

export default Gallery;
