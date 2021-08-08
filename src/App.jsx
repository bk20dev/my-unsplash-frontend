import Gallery from './features/gallery/Gallery';
import Navigation from './features/navigation/Navigation';
import { useGetAllPhotosQuery } from './services/photos';

const App = () => {
  const { data, error, isLoading } = useGetAllPhotosQuery();

  const renderGallery = () => {
    if (error) return <h3>Oops! There was an error</h3>;
    if (isLoading) return <h3>Loading</h3>;
    return <Gallery photos={data} />;
  };

  return (
    <div>
      <Navigation />
      {renderGallery()}
    </div>
  );
};

export default App;
