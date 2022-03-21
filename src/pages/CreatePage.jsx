import { useParams } from 'react-router-dom';

import CreateContainer from '../containers/CreateContainer';

export default function CreatePage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      <CreateContainer id={id} />
    </div>
  );
}
