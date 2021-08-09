import { Field } from 'react-final-form';
import styled from 'styled-components';

const StyledDescription = styled.p`
  font-size: 0.875rem;
  color: #4f4f4f;
  margin-bottom: 0.625rem;
  font: inherit;
`;

const StyledInput = styled.input`
  margin-bottom: 1.125rem;
  padding: 1.125rem;
  border: 2px solid #d7d7d7;
  border-radius: 0.75rem;
  font: inherit;
  outline: none;
  width: 100%;

  :focus {
    border-color: #000;
  }

  ::placeholder {
    color: #bdbdbd;
  }
`;

const LabeledField = ({
  name,
  label,
  placeholder,
  type = 'text',
  required,
}) => (
  <label style={{ display: 'block' }}>
    <StyledDescription>{label}</StyledDescription>
    <Field name={name}>
      {({ input }) => (
        <StyledInput
          type={type}
          name={input.name}
          placeholder={placeholder}
          value={input.value}
          onChange={input.onChange}
          required={required}
        />
      )}
    </Field>
  </label>
);

export default LabeledField;
