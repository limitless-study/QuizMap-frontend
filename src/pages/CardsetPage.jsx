import { useParams } from 'react-router-dom';

export default function CardsetPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      {id}
    </div>
  );
}
