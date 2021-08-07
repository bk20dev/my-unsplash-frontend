import Gallery from './features/gallery/Gallery';
import photos from './data/photos';

const App = () => {
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
