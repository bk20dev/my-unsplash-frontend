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
  position: relative;
`;

const StyledError = styled.p`
  background: #e53935;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 0.75rem;
  transform: translateY(calc(100% - 1.25rem));
  z-index: -1;
  border-radius: 0 0 0.75rem 0.75rem;
  word-break: break-word;
`;

const StyledTitle = styled.h2`
  font: inherit;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Modal = ({ title, children, onClose, error = null }) =>
  createPortal(
    <StyledOverlay onMouseUp={() => onClose()}>
      <StyledCard onMouseUp={(e) => e.stopPropagation()}>
        {error && <StyledError>{error}</StyledError>}
        <StyledTitle>{title}</StyledTitle>
        {children}
      </StyledCard>
    </StyledOverlay>,
    document.getElementById('modal')
  );

export default Modal;
