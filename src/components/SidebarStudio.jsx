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

const CardButtonField = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const AddCarrdButton = styled.button({
  margin: '0 auto',
  width: '100%',
  height: '2.5em',
  borderRadius: '4px',
  fontWeight: 'bolder',
  color: 'white',
  border: 'none',
  backgroundColor: '#8B74FF',
  ':hover': {
    cursor: 'pointer',
  },
});

const AddCardsetButtonField = styled.button({
  margin: '0 auto',
  marginTop: '5px',
  width: '100%',
  height: '2.5em',
  borderRadius: '4px',
  fontWeight: 'bolder',
  color: 'white',
  border: 'none',
  backgroundColor: '#C5BAFF',
  ':hover': {
    cursor: 'pointer',
  },
});

export default function SidebarStudio({
  cards, onCardClick, currentCardIndex, onAddCardClick, onAddCardsetClick,
}) {
  const handleCardClick = (card) => {
    const { cardIndex } = card;
    onCardClick(cardIndex);
  };

  return (
    <div>
      <div>
        {cards.map((card) => {
          if (card.cardIndex === currentCardIndex) {
            return (
              <SelectedCard
                type="button"
                key={card.cardIndex}
                id={card.id}
                onClick={() => handleCardClick(card)}
              >
                {card.question}
              </SelectedCard>
            );
          }
          return (
            <Card
              type="button"
              key={card.cardIndex}
              id={card.id}
              onClick={() => handleCardClick(card)}
            >
              {card.question}
            </Card>
          );
        })}
      </div>
      <CardButtonField>
        <AddCarrdButton
          type="button"
          name="add-card"
          onClick={() => onAddCardClick()}
        >
          add new card
        </AddCarrdButton>
        <AddCardsetButtonField
          type="button"
          name="add-button"
          onClick={() => onAddCardsetClick()}
        >
          add new cardset
        </AddCardsetButtonField>
      </CardButtonField>
    </div>
  );
}
