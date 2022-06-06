import styled from '@emotion/styled';

const NotesContainer = styled.div(
  (props) => ({
    opacity: props.isNotesHidden ? 0 : 1,
    width: props.isNotesHidden ? 0 : '250px',
  }),
  {
    display: 'flex',
    position: 'fixed',
    right: '68px',
    paddingTop: '60px',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    backgroundColor: 'white',
    boxShadow: '0 2px 6px 0 rgb(0 0 0 / 10%), 0 0 1px 0 rgb(0 0 0 / 32%)',
    transition: 'width .2s ease, opacity .2s ease',
  },
);

const Title = styled.h3({
  margin: '10px',
  borderBottom: '1px solid lightgray',
  color: '#1b1c1d',
});

const TextArea = styled.textarea({
  margin: '0 10px',
  padding: '5px',
  fontSize: '18px',
  height: '100%',
  fontFamily: 'arial',
  border: '1px solid #F1F1EF',
  resize: 'none',
  '::placeholder': {
    color: '#c1c1c1',
  },
  ':focus': {
    outline: 'none',
    border: '1px solid gray',
  },
});

export default function Notes({ notes, isNotesHidden, onChange }) {
  return (
    <NotesContainer isNotesHidden={isNotesHidden}>
      <Title>Notes</Title>
      <TextArea className="notes" value={notes} onChange={onChange} placeholder="write the answer in your own words!" />
    </NotesContainer>
  );
}
