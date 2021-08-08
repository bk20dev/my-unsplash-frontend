import Gallery from './features/gallery/Gallery';
import Navigation from './features/navigation/Navigation';
import photos from './data/photos';

const App = () => {
  return (
    <div>
      <Navigation />
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
