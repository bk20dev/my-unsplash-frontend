import { Form } from 'react-final-form';
import styled from 'styled-components';
import { useCreateMutation } from '../../services/photos';
import Button from '../common/Button';
import LabeledField from '../common/LabeledField';
import Modal from '../common/Modal';

const ControlsWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.375rem;
`;

const AddPhotoModal = ({ onClose }) => {
  const [addPhoto, { error }] = useCreateMutation();

  const handleSubmit = async ({ label, url }) => {
    const response = await addPhoto({ label, url });
    if (!response.error) onClose();
  };

  return (
    <Modal
      title="Add a new photo"
      onClose={onClose}
      error={error?.data?.message?.join('. ')}
    >
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <LabeledField
              name="label"
              label="Label"
              placeholder="Traditional Japanese Tofu"
              required
            />
            <LabeledField
              name="url"
              type="url"
              label="Photo URL"
              placeholder="https://images.unsplash.com/pho..."
              required
            />
            <ControlsWrapper>
              <Button
                type="button"
                color="transparent"
                textColor="#bdbdbd"
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button type="submit" color="#3db46d">
                Submit
              </Button>
            </ControlsWrapper>
          </form>
        )}
      />
    </Modal>
  );
};

export default AddPhotoModal;
