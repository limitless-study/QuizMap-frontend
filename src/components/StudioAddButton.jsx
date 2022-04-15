import styled from '@emotion/styled';

const Button = styled.button({
  margin: '0 auto',
  width: '100%',
  height: '2.5em',
  marginBottom: '5px',
  borderRadius: '4px',
  fontWeight: 'bolder',
  color: 'white',
  border: 'none',
  backgroundColor: '#8B74FF',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#C5BAFF',
  },
});

export default function StudioAddButton({ onClick, buttonText }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
}
