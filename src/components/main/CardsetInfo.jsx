import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { FaPen, FaPlayCircle, FaTrashAlt } from 'react-icons/fa';
import { BsFillDiagram3Fill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '20px',
});

const TopField = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const DueDateBox = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 5px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '13px',
  },
  (props) => ({
    display: props.display,
    backgroundColor: props.color,
  }),
);

const BottomField = styled.div({
  display: 'flex',
  fontWeight: 'bolder',
  fontSize: '22px',
  color: '#D7D7D7',
});

const IconBox = styled.button({
  width: '32px',
  height: '32px',
  fontSize: '15px',
  backgroundColor: 'white',
  borderRadius: '10em',
  border: '1px solid #D7D7D7',
  color: '#212121',
  marginLeft: '5px',
  '& a': {
    display: 'block',
    fontWeight: 'bold',
    border: 'none',
    color: '#212121',
    textAlign: 'center',
  },
  ':hover': {
    cursor: 'pointer',
  },
});

function getDueDateTime(date) {
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const day = (`00${date.getDate()}`).slice(-2);
  const hour = (`00${date.getHours()}`).slice(-2);
  const minute = (`00${date.getMinutes()}`).slice(-2);
  const dueDateTime = `${month} ${day}, ${year} at ${hour}:${minute}`;
  return dueDateTime;
}

function getDueDateTimeColor(dueDate) {
  const dayLeft = {
    one: 1440,
    two: 2880,
    three: 4320,
  };

  const today = new Date();
  const diffMillis = dueDate - today;
  const diffMinutes = Math.floor(diffMillis / 60000);

  if (diffMinutes <= dayLeft.one) {
    return '#EB3F4C';
  }
  if (diffMinutes <= dayLeft.two) {
    return '#F18C41';
  }
  if (diffMinutes <= dayLeft.three) {
    return '#FFD300';
  }
  return '#71E700';
}

export default function CardsetInfo({ cardsetInfo, onDelete, date }) {
  const {
    id, topic, cardSetCount, cardCount,
  } = cardsetInfo;

  // -- display dueDateTime if exists
  let display = 'none';
  let dueDateTimeColor = 'transparent';
  let dueDateTime = '';
  if (date) {
    display = 'flex';
    dueDateTime = getDueDateTime(date);
    dueDateTimeColor = getDueDateTimeColor(date);
  }

  const handleClick = () => {
    onDelete();
  };

  return (
    <Wrapper>
      <TopField>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>{topic}</h1>
          <DueDateBox color={dueDateTimeColor} display={display}>
            <BiTimeFive />
            {dueDateTime}
          </DueDateBox>
        </div>
        <div>
          <IconBox>
            <Link to={`/mindmap/${id}`}><BsFillDiagram3Fill /></Link>
          </IconBox>
          <IconBox
            type="button"
            onClick={handleClick}
          >
            <FaTrashAlt />
          </IconBox>
          <IconBox type="button">
            <Link to={`/studio/${id}`}>
              <FaPen />
            </Link>
          </IconBox>
          <IconBox type="button">
            <Link to={`/learn/${id}`}>
              <FaPlayCircle />
            </Link>
          </IconBox>
        </div>
      </TopField>
      <BottomField>
        {`${cardSetCount || '0'} Cardsets, ${cardCount || '0'} Cards`}
      </BottomField>
    </Wrapper>

  );
}
