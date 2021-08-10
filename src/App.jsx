import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';
import Gallery from './features/gallery/Gallery';
import Footer from './features/navigation/Footer';
import Navigation from './features/navigation/Navigation';
import useSearchPhotos from './hooks/useSearchPhotos';
import { useFindAllQuery } from './services/photos';

const StyledContainer = styled.div`
  padding: 0 1.75rem;
  max-width: 81rem;
  margin: auto;
  height: 100%;
`;

const LoaderWrapper = styled.div`
  margin: 4rem auto;
  width: max-content;
`;

const App = () => {
  const { data, error, isLoading } = useFindAllQuery();

  const photos = useSearchPhotos(data);

  const renderLoader = () => (
    <LoaderWrapper>
      <ScaleLoader />
    </LoaderWrapper>
  );

  const renderGallery = () => {
    if (error) return <h3>Oops! There was an error</h3>;
    if (isLoading) return renderLoader();
    if (data.length && !photos.length) return <h3>No results</h3>;
    return <Gallery photos={photos} />;
  };

  return (
    <StyledContainer>
      <Navigation />
      {renderGallery()}
      <Footer />
    </StyledContainer>
  );
};

export default App;
