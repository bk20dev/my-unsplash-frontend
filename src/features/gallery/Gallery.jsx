import Photo from './Photo';
import styled from 'styled-components';
import distributePhotos from './distributePhotos';

const StyledContainer = styled.div`
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
  const columns = distributePhotos(photos, 3, 28);

  return (
    <StyledContainer>
      {columns.map((column, i) => (
        <StyledColumn key={i}>
          {column.map(({ id, url, label }) => (
            <Photo key={id} src={url} label={label} />
          ))}
        </StyledColumn>
      ))}
    </StyledContainer>
  );
};

export default Gallery;
