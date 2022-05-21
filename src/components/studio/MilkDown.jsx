import styled from '@emotion/styled';

import { useRef, useEffect } from 'react';
import { Slice } from '@milkdown/prose/model';

import {
  Editor,
  rootCtx,
  defaultValueCtx,
  editorViewCtx,
  parserCtx,
} from '@milkdown/core';
import { nord, nordDark, nordLight } from '@milkdown/theme-nord';
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

function getEditor(value, cardindex, onChange) {
  const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, value);
      ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
        setTimeout(onChange(cardindex.current, markdown));
      });
    })
    .use(nord)
    .use(commonmark)
    .use(slash)
    .use(history)
    .use(nordLight)
    .use(listener));

  return editor;
}

export default function MilkDown({ cardIndex, value, onChange }) {
  const editorRef = useRef();

  const cardindex = useRef(cardIndex);
  cardindex.current = cardIndex;

  const editor = getEditor(value, cardindex, onChange);

  useEffect(() => {
    if (editorRef.current) {
      const ed = editorRef.current.get();
      if (ed) {
        ed.action((ctx) => {
          const view = ctx.get(editorViewCtx);
          const parser = ctx.get(parserCtx);
          const doc = parser(value);
          if (!doc) return;
          const { state } = view;
          view.dispatch(state.tr.replace(0, state.doc.content.size, new Slice(doc.content, 0, 0)));
        });
      }
    }
  }, [cardIndex]);

  return (
    <EditorField>
      <ReactEditor ref={editorRef} editor={editor} />
    </EditorField>
  );
}
