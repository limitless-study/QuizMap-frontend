import styled from '@emotion/styled';

import { useRef } from 'react';

import Rating from 'react-rating';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const CardBox = styled.div({
  whiteSpace: 'pre-line',
  position: 'relative',
  display: 'table',
  width: '350px',
  height: '300px',
  border: '1px solid lightgray',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgb(0 0 0 / 8%)',
  textAlign: 'center',
  padding: '5px',
  '& span': {
    fontSize: '22px',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
});

const RatingField = styled.div({
  right: '0',
  position: 'absolute',
  paddingRight: '15px',
  '& span': {
    fontSize: '28px',
  },
  color: '#FFCD01',
});

export default function Card({ content, starCount, onChangeStarCount }) {
  const handleChange = (changedStarCount) => {
    onChangeStarCount(changedStarCount);
  };

  return (
    <CardBox>
      <RatingField>
        <Rating
          stop={4}
          emptySymbol={<AiOutlineStar />}
          fullSymbol={<AiFillStar />}
          initialRating={starCount}
          onChange={handleChange}
        />
      </RatingField>
      <span>{content}</span>
    </CardBox>
  );
}
