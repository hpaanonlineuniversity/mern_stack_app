import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../supabase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'; //redux

export default function Callback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {

      const API_BASE_URL = import.meta.env.DEV 
        ? 'http://localhost:3000'  // Browser ကနေခေါ်ရင်
        : 'http://backend:3000';    // Docker container ထဲကခေါ်ရင်

      // Session ရှိမရှိစစ်ဆေးခြင်း
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session) {
        // User information ရယူခြင်း
        const userData = {
          email: session.user.email,
          name: session.user.user_metadata.user_name || 
                session.user.user_metadata.name || 
                session.user.user_metadata.full_name ||
                session.user.email.split('@')[0], // fallback
          photo: session.user.user_metadata.avatar_url
        };        
        
        //console.log('User Info:', userData);


        const res = await fetch(`${API_BASE_URL}/api/auth/github`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          photo: userData.photo,
        }),
      });
      
      const data = await res.json();
      console.log("checking data : ",data);
      dispatch(signInSuccess(data));
      navigate('/');
      }
    };

    getUser();
  }, [navigate]);
}