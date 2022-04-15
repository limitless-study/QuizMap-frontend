import styled from '@emotion/styled';

const Card = styled.button({
  margin: '5px auto',
  width: '100%',
  height: '8em',
});

const SelectedCard = styled.button({
  border: '2px solid #2F38FF',
  backgroundColor: '#F9F9F9',
  margin: '5px auto',
  width: '100%',
  height: '8em',
});

export default function SideBarCard({
  selected = 'false', card, onClick, cardText,
}) {
  const handleClick = (cardIndex) => {
    onClick(cardIndex);
  };

  if (selected) {
    return (
      <SelectedCard
        type="button"
        onClick={() => handleClick(card.cardIndex)}
      >
        {cardText}
      </SelectedCard>
    );
  }
  return (
    <div>
      <Card
        type="button"
        onClick={() => handleClick(card.cardIndex)}
      >
        {cardText}
      </Card>
    </div>
  );
}
