import styled from '@emotion/styled';

const InputContainer = styled.div({
  textAlign: 'center',
  '& input': {
    margin: '0 auto',
    width: '100%',
    height: '100%',
    fontSize: '22px',
    border: 'none',
    borderBottom: '1px solid lightgray',
    backgroundColor: 'transparent',
    fontWeight: 'bolder',
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
