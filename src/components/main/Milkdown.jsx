import { useRef, useEffect } from 'react';

import { Slice } from '@milkdown/prose/model';

import {
  Editor,
  rootCtx,
  defaultValueCtx,
  editorViewCtx,
  parserCtx,
  editorViewOptionsCtx,
} from '@milkdown/core';

import { nord, nordLight } from '@milkdown/theme-nord';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';
import { listener } from '@milkdown/plugin-listener';
import styled from '@emotion/styled';

const MilkdownContainer = styled.div({
  '.milkdown': {
    display: 'relative',
    background: 'none',
    boxShadow: 'none',
    height: '100%',
    width: '100%',
  },
  '.milkdown .editor': {
    whiteSpace: 'break-spaces',
    wordBreak: 'break-all',
    fontSize: '15px',
    fontWeight: 'normal',
    padding: '10px',
  },
  '.milkdown .editor p': {
    lineHeight: '1',
    margin: '10px 0',
  },
});

function getEditor(content) {
  const editable = () => false;

  const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, content);
      ctx.set(editorViewOptionsCtx, { editable });
    })
    .use(nord)
    .use(commonmark)
    .use(nordLight)
    .use(listener));

  return editor;
}

export default function Milkdown({ id, content }) {
  const editorRef = useRef();

  const editor = getEditor(content);

  useEffect(() => {
    if (editorRef.current) {
      const ed = editorRef.current.get();
      if (ed) {
        ed.action((ctx) => {
          const view = ctx.get(editorViewCtx);
          const parser = ctx.get(parserCtx);
          const doc = parser(content);
          if (!doc) return;
          const { state } = view;
          view.dispatch(state.tr.replace(0, state.doc.content.size, new Slice(doc.content, 0, 0)));
        });
      }
    }
  }, [id, content]);

  return (
    <MilkdownContainer>
      <ReactEditor ref={editorRef} editor={editor} />
    </MilkdownContainer>
  );
}
