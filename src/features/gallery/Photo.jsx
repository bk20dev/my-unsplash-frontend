import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem 1.25rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: hidden;
`;

const StyledContainer = styled.figure`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  :hover ${Overlay} {
    background-image: linear-gradient(
      rgba(0 0 0 / 75%) 1.125rem,
      transparent,
      rgba(0 0 0 / 75%) calc(100% - 1.125rem)
    );
  }

  :hover ${StyledWrapper} {
    visibility: visible;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  color: #e53935;
  border: none;
  margin-left: auto;
  font: inherit;
  font-size: 0.75rem;
  border: 1px solid #e53935;
  border-radius: 3rem;
  cursor: pointer;

  :hover {
    background: #e53935;
    color: white;
  }
`;

const StyledCaption = styled.figcaption`
  color: white;
  font-weight: 500;
  word-break: break-word;
`;

const Photo = ({ src, label, onClick }) => (
  <StyledContainer>
    <img src={src} alt={label} width="100%" style={{ display: 'block' }} />
    <Overlay />
    <StyledWrapper>
      <StyledButton onClick={onClick}>delete</StyledButton>
      <StyledCaption>{label}</StyledCaption>
    </StyledWrapper>
  </StyledContainer>
);

export default Photo;
