import styled from '@emotion/styled';

import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';
import { slash } from '@milkdown/plugin-slash';
import { history } from '@milkdown/plugin-history';

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

export default function MilkDown({
  value, name, id, inputName, placeholder, onChange,
}) {
  const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
    })
    .use(nord)
    .use(commonmark)
    .use(slash)
    .use(history));

  return (
    <EditorField>
      <ReactEditor editor={editor} />
    </EditorField>
  );
}
