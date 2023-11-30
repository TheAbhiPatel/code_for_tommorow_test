import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { IUser, addUserData } from './store/userSlice';
import { useAppDispatch } from './store/hooks';

const Routers = () => {
  const user = localStorage.getItem('@userInfo');
  const dispatch = useAppDispatch();

  if (user !== null) {
    const userInfo = JSON.parse(user) as IUser;
    dispatch(addUserData(userInfo));
  }
  return (
    <BrowserRouter>
      <div className='max-w-[1250px] mx-auto'>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routers;
