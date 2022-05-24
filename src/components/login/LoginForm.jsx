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
});

const Tag = styled.div({
  textAlign: 'left',
  fontSize: '15px',
  color: '#bcd4e6',
});

const Input = styled.input({
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  borderRadius: '8px',
  padding: '0 15px',
  fontSize: '16px',
  outline: 'none',
  border: 'none',
});

export default function SignUpForm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Tag>E-Mail</Tag>
        <InputContainer>
          <Input />
        </InputContainer>
      </div>
      <div>
        <Tag>ID</Tag>
        <InputContainer>
          <Input />
        </InputContainer>
      </div>
      <div>
        <Tag>Password</Tag>
        <InputContainer>
          <Input />
        </InputContainer>
      </div>
    </div>
  );
}
