import Gallery from './features/gallery/Gallery';
import photos from './data/photos';

const App = () => {
  return (
    <div>
      <h1>My Unsplash</h1>
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
