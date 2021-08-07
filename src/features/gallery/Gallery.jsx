import Photo from './Photo';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledColumn = styled(StyledContainer)`
  flex-direction: column;
`;

const Gallery = ({ photos }) => {
  return (
    <StyledContainer>
      <StyledColumn>
        {photos.slice(0, 4).map(({ id, url, label }) => (
          <Photo key={id} src={url} label={label} />
        ))}
      </StyledColumn>
      <StyledColumn>
        {photos.slice(4, 7).map(({ id, url, label }) => (
          <Photo key={id} src={url} label={label} />
        ))}
      </StyledColumn>
      <StyledColumn>
        {photos.slice(7, 10).map(({ id, url, label }) => (
          <Photo key={id} src={url} label={label} />
        ))}
      </StyledColumn>
    </StyledContainer>
  );
};

export default Gallery;
