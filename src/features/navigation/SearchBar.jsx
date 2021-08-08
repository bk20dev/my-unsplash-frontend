import styled from 'styled-components';
import SearchIcon from '../../assets/search_black_24dp.svg';

const StyledLabel = styled.label`
  position: relative;
`;

const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 1.25rem;
  transform: translateY(-50%);
  width: 1.5rem;
  opacity: 25%;
`;

const StyledInput = styled.input`
  padding: 1.125rem 1.125rem 1.125rem 4rem;
  font: inherit;
  border: 2px solid #d7d7d7;
  border-radius: 0.75rem;
  outline: none;

  :focus {
    border-color: #000000;
  }

  ::placeholder {
    color: #bdbdbd;
  }
`;

const SearchBar = () => {
  return (
    <StyledLabel>
      <StyledIcon src={SearchIcon} alt="Search" />
      <StyledInput type="text" placeholder="Search by name" />
    </StyledLabel>
  );
};

export default SearchBar;