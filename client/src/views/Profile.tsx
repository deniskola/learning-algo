import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import profileReducer, { setName } from '../redux/slices/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.profile.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <p>My name is {name}</p>
    </div>
  );
};

export default Profile;
