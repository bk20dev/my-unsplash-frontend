import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AddIcon from '../../assets/add_white_24dp.svg';
import Logo from '../../assets/my_unsplash_logo.svg';
import LogoSmall from '../../assets/my_unsplash_logo_small.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { update } from '../../services/search';
import Button from '../common/Button';
import AddPhotoModal from '../gallery/AddPhotoModal';
import SearchBar from './SearchBar';

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 2.5rem;
`;

const ResponsiveDivider = styled.div`
  flex-grow: 1;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Navigation = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const { width } = useWindowDimensions();
  const mobileView = width < 768;

  return (
    <>
      <StyledNavigation as="nav">
        <picture>
          <source media="(max-width: 768px)" srcSet={LogoSmall} />
          <img
            src={Logo}
            alt="My Unsplash Logo"
            height="32px"
            onClick={() => dispatch(update(''))}
            style={{ cursor: 'pointer', marginRight: '1.75rem' }}
          />
        </picture>
        <SearchBar />
        <ResponsiveDivider />
        <Button
          color="#3DB46D"
          onClick={() => setModalVisible(true)}
          style={{ marginLeft: '1.75rem' }}
        >
          {(() => {
            if (mobileView)
              return (
                <img src={AddIcon} alt="Add new" style={{ display: 'block' }} />
              );
            else return 'Add a photo';
          })()}
        </Button>
      </StyledNavigation>
      {modalVisible && <AddPhotoModal onClose={() => setModalVisible(false)} />}
    </>
  );
};

export default Navigation;
