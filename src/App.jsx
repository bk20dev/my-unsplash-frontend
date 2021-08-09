import Modal from './features/common/Modal';
import Gallery from './features/gallery/Gallery';
import Navigation from './features/navigation/Navigation';
import useSearchPhotos from './hooks/useSearchPhotos';
import { useFindAllQuery } from './services/photos';

const App = () => {
  const { data, error, isLoading } = useFindAllQuery();

  const photos = useSearchPhotos(data);

  const renderGallery = () => {
    if (error) return <h3>Oops! There was an error</h3>;
    if (isLoading) return <h3>Loading</h3>;
    if (data.length && !photos.length) return <h3>No results</h3>;
    return <Gallery photos={photos} />;
  };

  return (
    <div>
      <Modal title={'Add a new photo'}>Something</Modal>
      <Navigation />
      {renderGallery()}
    </div>
  );
};

export default App;
