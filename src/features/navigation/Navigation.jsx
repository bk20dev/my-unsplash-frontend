import styled from 'styled-components';
import Logo from '../../assets/my_unsplash_logo.svg';
import SearchBar from './SearchBar';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavigation = styled(FlexWrapper)`
  justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 2.5rem;
`;

const Navigation = () => (
  <StyledNavigation as="nav">
    <FlexWrapper>
      <img src={Logo} alt="My Unsplash Logo" height="32px" />
      <SearchBar />
    </FlexWrapper>
    <button>Add a photo</button>
  </StyledNavigation>
);

export default Navigation;
