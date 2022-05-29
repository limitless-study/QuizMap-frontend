import MindElixir from 'mind-elixir';

import styled from '@emotion/styled';

import { useEffect } from 'react';

import Loading from '../common/Loading';

const MindMapField = styled.div({
  width: '82vw',
  height: '100vh',
});

export default function MindMap({ mindMapCards }) {
  if (mindMapCards.length === 0) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translate(-40%, -50%)',
      }}
      >
        <Loading
          size={80}
        />
      </div>
    );
  }

  const mindNode = {
    nodeData: mindMapCards,
  };

  useEffect(() => {
    const mindmap = new MindElixir({
      el: '#map',
      direction: MindElixir.RIGHT,
      data: mindNode,
      draggable: false,
      contextMenu: false,
      toolBar: true,
      nodeMenu: false,
      keypress: false,
    });
    mindmap.init();
  });

  return (
    <div>
      <MindMapField id="map" />
    </div>
  );
}
