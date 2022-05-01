import styled from '@emotion/styled';

import { useEffect } from 'react';

import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';
import { slash } from '@milkdown/plugin-slash';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';

const EditorField = styled.div({
  width: '19em',
  height: '14em',
  margin: '15px',
  fontSize: '20px',
  fontFamily: 'sans-serif',
  '.milkdown': {
    borderRadius: '10px',
    backgroundColor: 'transparent',
    border: '1px solid lightgray',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
    color: 'black',
  },
  '.milkdown .editor': {
    overflow: 'auto',
    padding: '10px',
    height: '14em',
    lineHeight: '1',
    '::-webkit-scrollbar': {
      width: '15px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#8773FF',
      borderRadius: '10px',
      backgroundClip: 'padding-box',
      border: '3px solid transparent',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'none',
    },
  },
  '.milkdown-18zfr4': {
    lineHeight: 1,
  },
  '.milkdown-qxzvxm::before': {
    color: '#D4D4D4',
  },
});

function getEditor(value, onChange) {
  const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, value); // TODO: 이 부분이 useEffect 안에서 바뀔 수 있도록
      ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
        setTimeout(
          onChange(markdown),
        );
      });
    })
    .use(nord)
    .use(commonmark)
    .use(slash)
    .use(history)
    .use(listener));

  return editor;
}

export default function MilkDown({ cardIndex, value, onChange }) {
  const editor = getEditor(value, onChange);

  // cardIndex가 바뀔 때마다 새롭게 실행되는 부분
  useEffect(() => {
    console.log('useEffect');
    // editor = getEditor(value, onChange);
  }, [cardIndex]);

  return (
    <EditorField>
      <ReactEditor editor={editor} />
    </EditorField>
  );
}
