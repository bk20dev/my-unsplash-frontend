import { Form } from 'react-final-form';
import styled from 'styled-components';
import Button from '../common/Button';
import LabeledField from '../common/LabeledField';
import Modal from '../common/Modal';

const ControlsWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.375rem;
`;

const AddPhotoModal = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal title="Add a new photo">
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
              <Button type="button" color="transparent" textColor="#BDBDBD">
                Cancel
              </Button>
              <Button type="submit" color="#3DB46D">
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
