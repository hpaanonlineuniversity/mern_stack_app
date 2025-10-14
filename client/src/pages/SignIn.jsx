import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { signInStart, signInSuccess, signInFailure, clearError } from '../redux/user/userSlice.js'; //redux
import { useDispatch, useSelector } from 'react-redux'; //redux


export default function SignIn() {
  const [formData, setFormData] = useState({});
  //const [error, setError] = useState(false);
  //const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);


  const navigate = useNavigate();
  const dispatch = useDispatch(); //redux

   // Component mount ဖြစ်တိုင်း error ကို clear လုပ်မယ်
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3000'  // Browser ကနေခေါ်ရင်
  : 'http://backend:3000';    // Docker container ထဲကခေါ်ရင်


    try {
      
      //setLoading(true);
      //setError(false);

      dispatch(signInStart()); //redux


      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);

        // ဒီမှာ သေချာ console.log ထည့်ကြည့်ပါ
      console.log('Backend Response:', data);

    if (!res.ok || data.success === false) 
    {
      dispatch(signInFailure(data));
      return;
    }


      //setLoading(false);
      dispatch(signInSuccess(data)); //redux
      navigate('/');

    } catch (error) {
      //setLoading(false);
      //setError(true);
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Do not Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{ error ? error.message || 'Something went wrong!' : "" }</p>
    </div>
  );
}