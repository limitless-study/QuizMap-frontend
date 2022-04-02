import MindElixir from 'mind-elixir';

import styled from '@emotion/styled';

import { useEffect } from 'react';

const MindMapField = styled.div({
  width: '82vw',
  height: '100vh',
});

export default function MindMap({ mindMapCards }) {
  if (mindMapCards.length === 0) {
    return (
      <div>마인드맵으로 변환 중...</div>
    );
  }

  // [fix] : nodeData 라는 속성을 추가해야 에러 안 생김
  const mindNode = {
    nodeData: mindMapCards,
  };

  // [fix] : useEffect 안에서 실행해야 에러 안 생김
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
