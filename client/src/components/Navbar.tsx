import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { addUserData } from '../store/userSlice';

const Navbar = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('@userInfo');
    dispatch(
      addUserData({
        email: '',
        fullName: '',
        token: '',
      })
    );
    navigate('/login');
  };

  return (
    <nav className='flex px-20 justify-between py-3 bg-gray-100'>
      <div>
        <h1>Todo App</h1>
      </div>
      <div>
        <span>
          Hello <span className='text-blue-600 font-bold'>{user.fullName}</span>
        </span>
        <span
          onClick={handleLogout}
          className='px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer'
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
