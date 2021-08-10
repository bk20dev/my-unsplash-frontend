import { useMemo, useState } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Photo from './Photo';
import RemovePhotoModal from './RemovePhotoModal';
import distributePhotos from './utils/distributePhotos';

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  gap: 1.75rem;
`;

const StyledColumn = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const getColumnCount = (width) => {
  if (width < 700) return 1;
  if (width < 1000) return 2;
  return 3;
};

const Gallery = ({ photos }) => {
  const { width } = useWindowDimensions();
  const columnCount = getColumnCount(width);

  const columns = useMemo(() => {
    return distributePhotos(photos, columnCount, 28);
  }, [photos, columnCount]);

  const [deleteModalPhoto, setDeleteModalPhoto] = useState(null);

  return (
    <>
      <StyledContainer columnCount={columnCount}>
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
