import styled from '@emotion/styled';

const Button = styled.button({
  width: '400px',
  height: '59px',
  backgroundColor: '#5B40FF',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  margin: '7px',
  lineHeight: '45px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  ':hover': {
    backgroundColor: '#492DF0',
    transition: '300ms',
  },
});

export default function SignUpButton({ onClick }) {
  return (
    <Button
      type="button"
      onClick={onClick}
    >
      Sign Up
    </Button>
  );
}
