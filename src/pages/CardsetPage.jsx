import { useParams } from 'react-router-dom';
import CardsetContainer from '../containers/CardsetContainer';

export default function CardsetPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <CardsetContainer id={id} />
    </div>
  );
}
