import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

interface ITodo {
  title: string;
  _id: string;
}

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState(false);

  const handleTodoAdd = async () => {
    if (!title) return setError(true);
    setError(false);

    try {
      const res = await axiosInstance.post('todo', { title });
      if (res.status == 201) {
        console.log('todo created');
        setTitle('');
        fetchTodods();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodods();
  }, []);

  const fetchTodods = async () => {
    try {
      const res = await axiosInstance.get('todo');
      console.log(res.data.todos);

      if (res.status == 200) {
        setTodos(res.data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const res = await axiosInstance.delete(`todo/${id}`);

      if (res.status == 200) {
        fetchTodods();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[90%] md:w-[50%] bg-gray-200 rounded-md p-5'>
      <div className=' flex justify-between'>
        <input
          type='text'
          value={title}
          name='title'
          placeholder='type something...'
          onChange={(e) => setTitle(e.target.value)}
          className='w-[75%] px-5 py-1'
        />
        <span
          onClick={handleTodoAdd}
          className='px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer'
        >
          Add todo
        </span>
      </div>
      {error && (
        <p className='text-red-500 mt-1 text-xs'>* Please write something !!</p>
      )}
      <div className='mt-10 '>
        {todos.map((item, idx) => {
          return (
            <div
              key={idx}
              className='p-2 rounded-md bg-gray-100 my-2 flex justify-between'
            >
              <h2>{item.title} </h2>
              <span
                onClick={() => deleteTodo(item._id)}
                className='px-3 py-1 h-8 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer'
              >
                Delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTodo;
