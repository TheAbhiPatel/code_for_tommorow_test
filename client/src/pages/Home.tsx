import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AddTodo from '../components/AddTodo';

const Home = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.token) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className='w-full'>
        <div className='mt-20 flex justify-center'>
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default Home;
