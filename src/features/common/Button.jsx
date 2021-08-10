import styled from 'styled-components';

const Button = styled.button`
  background: ${({ color }) => color};
  color: ${({ textColor = '#ffffff' }) => textColor};
  border: none;
  border-radius: 0.75rem;
  font: inherit;
  padding: 1rem 1.25rem;
  cursor: pointer;

  :disabled {
    filter: grayscale(0.3);
  }
`;

export default Button;
