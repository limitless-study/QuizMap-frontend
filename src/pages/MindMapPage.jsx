import { useParams } from 'react-router-dom';

export default function MindMapPage({ params }) {
  const { id } = params || useParams();

  return (
    <div />
  );
}
