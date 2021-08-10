import styled from 'styled-components';
import { useDeleteMutation } from '../../services/photos';
import Button from '../common/Button';
import Modal from '../common/Modal';

const ControlsWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.375rem;
`;

const StyledImage = styled.img`
  display: block;
  max-height: 50vh;
  max-width: 100%;
  border-radius: 0.75rem;
  margin: 0 auto 1.125rem;
`;

const RemovePhotoModal = ({ photo, onClose }) => {
  const [deletePhoto, { isLoading, error }] = useDeleteMutation();

  const handleDelete = async () => {
    const response = await deletePhoto(photo.id);
    if (!response.error) onClose();
  };

  return (
    <Modal
      title="Are you sure?"
      onClose={onClose}
      error={error && 'An error occurred. Refresh the page and try again'}
    >
      <StyledImage src={photo.url} alt={photo.label} />
      <ControlsWrapper>
        <Button
          color="transparent"
          textColor="#bdbdbd"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
        <Button color="#e53935" onClick={handleDelete} disabled={isLoading}>
          Delete
        </Button>
      </ControlsWrapper>
    </Modal>
  );
};

export default RemovePhotoModal;
