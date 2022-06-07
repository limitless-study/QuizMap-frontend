import styled from '@emotion/styled';

import Rating from 'react-rating';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Milkdown from './Milkdown';

const CardBox = styled.div(
  {
    whiteSpace: 'pre-line',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '500px',
    maxWidth: '500px',
    minHeight: '350px',
    border: '1px solid lightgray',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgb(0 0 0 / 8%)',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: 'white',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'all 1s',
  },
  (props) => ({
    zIndex: props.zIndex,
    backgroundColor: props.background,
  }),
);

const RatingField = styled.div({
  right: '0',
  top: '0',
  fontSize: '25px',
  position: 'absolute',
  padding: '15px',
  color: '#FFCD01',
  zIndex: 10,
});

export default function Card({
  id, className, content, starCount, onChangeStarCount,
}) {
  const handleChange = (changedStarCount) => {
    onChangeStarCount(changedStarCount);
  };

  return (
    <CardBox
      className={className === 'front' ? className : `${className} is-flipped`}
      background={className === 'front' ? 'white' : '#FAFAFA'}
    >
      <RatingField>
        <Rating
          stop={4}
          emptySymbol={<AiOutlineStar />}
          fullSymbol={<AiFillStar />}
          initialRating={starCount}
          onChange={handleChange}
        />
      </RatingField>
      <Milkdown
        id={id}
        content={content}
      />
    </CardBox>
  );
}
