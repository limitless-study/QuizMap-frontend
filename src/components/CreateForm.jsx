import styled from '@emotion/styled';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
});

const Label = styled.label({
  display: 'none',
});

const SideBar = styled.div({
  backgroundColor: '#EDEDED',
});

export default function CreateForm({ fields, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  const { title, question, answer } = fields;

  return (
    <Wrapper>
      <SideBar>
        <Label
          htmlFor="flashcard-title"
        >
          flashcard title
        </Label>
        <input
          type="text"
          id="flashcard-title"
          name="title"
          value={title}
          placeholder="enter new title"
          onChange={handleChange}
        />
      </SideBar>
      <div>
        <div>
          <Label
            htmlFor="flashcard-question"
          >
            flashcard question
          </Label>
          <input
            type="text"
            id="flashcard-question"
            name="question"
            value={question}
            placeholder="enter your question here"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label
            htmlFor="flashcard-answer"
          >
            flashcard answer
          </Label>
          <input
            type="text"
            id="flashcard-answer"
            name="answer"
            value={answer}
            placeholder="enter your answer here"
            onChange={handleChange}
          />
        </div>
      </div>
    </Wrapper>
  );
}
