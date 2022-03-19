const cardset1 = {
  id: 1,
  title: '상식 퀴즈',
  type: 'cardset',
  cards: [
    {
      id: 2, type: 'card', question: '사과는?', answer: '빨갛다',
    },
    {
      id: 3, type: 'card', question: '과일은?', answer: '맛있다',
    },
    {
      id: 4,
      type: 'cardset',
      title: '숫자 상식',
      cards: [
        {
          id: 5, type: 'card', question: '1+1', answer: '2',
        },
        {
          id: 8, type: 'card', question: '2+2', answer: '4',
        },
        {
          id: 11,
          title: '숫자의 역사',
          type: 'cardset',
          cards: [
            {
              id: 12, type: 'card', question: '숫자의 시작', answer: '~~',
            },
          ],
        },
      ],
    },
  ],
};

export default cardset1;
