import styled from '@emotion/styled';

const InputContainer = styled.div({
  '& input': {
    width: '100%',
    fontSize: '15px',
    border: 'none',
    borderBottom: '1px solid lightgray',
    backgroundColor: 'transparent',
  },
  '& input:focus': {
    outline: 'none',
    borderBottom: '1px solid gray',
  },
});

export default function InputField({
  id, labelText, type = 'text', inputName, inputText, placeholder, onChange,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <InputContainer>
      <label
        style={{ display: 'none' }}
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={inputName}
        value={inputText}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
      />
    </InputContainer>
  );
}
