import styled from '@emotion/styled';

const Card = styled.button(
  {
    margin: '10px auto',
    width: '100%',
    padding: '24px 5px',
    height: '8em',
    display: 'block',
    '& span': {
      display: 'block',
      overflow: 'hidden',
      whiteSpace: 'normal',
      textOverflow: 'ellipsis',
    },
  },
  (props) => ({
    backgroundColor: props.selected ? '#F9F9F9' : 'transparent',
    border: props.selected ? '2px solid #2F38FF' : '1px solid #a9b2b8',
  }),
);

export default function SideBarCard({
  selected = 'false', card, onClick, cardText,
}) {
  const handleClick = (cardIndex) => {
    onClick(cardIndex);
  };

  return (
    <Card
      type="button"
      selected={selected}
      onClick={() => handleClick(card.cardIndex)}
    >
      <span>{cardText}</span>
    </Card>
  );
}
