import styled from '@emotion/styled';

import Rating from 'react-rating';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Milkdown from './Milkdown';

const CardBox = styled.div(
  (props) => ({
    zIndex: props.zIndex,
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
      className={className === 'front' ? `${className} card-front` : `${className} card-back`}
    >
      <div className="flip-card-side">
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
      </div>
    </CardBox>
  );
}
