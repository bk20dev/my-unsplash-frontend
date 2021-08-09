import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  width: 36rem;
`;

const StyledTitle = styled.h2`
  font: inherit;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Modal = ({ title, children }) =>
  createPortal(
    <StyledOverlay>
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </StyledCard>
    </StyledOverlay>,
    document.getElementById('modal')
  );

export default Modal;
