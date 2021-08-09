import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../../assets/my_unsplash_logo.svg';
import { update } from '../../services/search';
import Button from '../common/Button';
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

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <StyledNavigation as="nav">
      <FlexWrapper>
        <img
          src={Logo}
          alt="My Unsplash Logo"
          height="32px"
          onClick={() => dispatch(update(''))}
          style={{ cursor: 'pointer' }}
        />
        <SearchBar />
      </FlexWrapper>
      <Button color="#3DB46D">Add a photo</Button>
    </StyledNavigation>
  );
};

export default Navigation;
