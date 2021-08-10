import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import RemovePhotoModal from './RemovePhotoModal';
import distributePhotos from './utils/distributePhotos';

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
`;

const StyledColumn = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Gallery = ({ photos }) => {
  const columns = useMemo(() => {
    return distributePhotos(photos, 3, 28);
  }, [photos]);

  const [deleteModalPhoto, setDeleteModalPhoto] = useState(null);

  return (
    <>
      <StyledContainer>
        {columns.map((column, i) => (
          <StyledColumn key={i}>
            {column.map((photo) => {
              const { id, url, label } = photo;
              return (
                <Photo
                  key={id}
                  src={url}
                  label={label}
                  onClick={() => setDeleteModalPhoto(photo)}
                />
              );
            })}
          </StyledColumn>
        ))}
      </StyledContainer>
      {deleteModalPhoto && (
        <RemovePhotoModal
          photo={deleteModalPhoto}
          onClose={() => setDeleteModalPhoto(null)}
        />
      )}
    </>
  );
};

export default Gallery;
