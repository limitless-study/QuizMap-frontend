import { useDispatch, useSelector } from 'react-redux';

import {
  changeCreateFields,
} from '../actions';

import { get } from '../utils';

import CreateForm from '../components/CreateForm';

export default function CreateContainer() {
  const dispatch = useDispatch();

  const createFields = useSelector(get('createFields'));

  const handleOnChange = ({ name, value }) => {
    dispatch(changeCreateFields({ name, value }));
  };

  return (
    <div>
      <CreateForm
        fields={createFields}
        onChange={handleOnChange}
      />
    </div>
  );
}
