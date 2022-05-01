import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

export default function HistoryButtons() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', marginRight: '10px' }}>
      <BsArrowLeftCircle size={30} color="gray" style={{ paddingRight: '2px' }} onClick={() => navigate(-1)} />
      <BsArrowRightCircle size={30} color="gray" onClick={() => navigate(-1)} />
    </div>
  );
}
