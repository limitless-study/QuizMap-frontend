import styled from '@emotion/styled';

const InputContainer = styled.div({
  width: '400px',
  height: '59px',
  backgroundColor: 'white',
  border: '2px solid #eceffe',
  marginBottom: '14px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'white',
    transition: 'background-color 1s',
  },
  '& form': {
    width: '100%',
    height: '100%',
    '& input': {
      padding: '2px',
      width: '99%',
      height: '99%',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      border: 'none',
    },
  },
});

export default function InputField({
  type = 'text', targetName, inputValue, onChange,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <InputContainer>
      <form>
        <input
          type={type}
          name={targetName}
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </InputContainer>
  );
}
